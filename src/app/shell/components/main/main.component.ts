import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { Logger } from '@core/services/logger.service';

import * as icons from '@app/config/icons.json';
import { environment } from '@env/environment';

const log = new Logger('MainComponent');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private mdIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    // logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    // setup icons
    // tslint:disable-next-line: no-string-literal
    log.debug('icons', icons['default']);
    // tslint:disable-next-line: no-string-literal
    for (const icon of icons['default']) {
      this.mdIconRegistry
        .addSvgIcon(icon.name, this.sanitizer.bypassSecurityTrustResourceUrl(icon.url));
    }
  }

}
