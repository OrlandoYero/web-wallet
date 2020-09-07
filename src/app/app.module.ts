import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { I18nModule } from '@i18n/i18n.module';
import { ShellModule } from '@shell/shell.module';
import { CoreModule } from '@core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '@env/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,

    TranslateModule.forRoot(),
    CoreModule,
    ShellModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    StoreModule.forRoot({}, {}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EffectsModule.forRoot([]),
  ],
  exports: [
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
