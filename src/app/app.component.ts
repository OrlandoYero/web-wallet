import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from '@core/util/until-destroyed';
import { Logger } from '@core/services/logger.service';
import { environment } from '@env/environment';
import { I18nService } from '@i18n/services/i18n.service';
import { merge } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

const log = new Logger('AppComponent');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'arcadlab';

  constructor(
    private i18nService: I18nService,
    private translateService: TranslateService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (environment.production) {
      Logger.enableProductionMode();
    }
    log.debug('enviroment', environment);
    // Setup translations
    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
    this.i18nService.language = 'en';

    const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
    // Change page title on navigation or language change, based on route data
    merge(this.translateService.onLangChange, onNavigationEnd)
      .pipe(
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        switchMap((route) => route.data),
        untilDestroyed(this)
      )
      .subscribe((event: Data) => {
        const title = event.title;
        if (title) {
          this.titleService.setTitle(this.translateService.instant(title));
        }
      });
  }

  ngOnDestroy(): void { }

}
