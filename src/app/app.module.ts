
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from '@core/core.module';
import { ShellModule } from '@shell/shell.module';

import { AppComponent } from './app.component';

import { environment } from '@env/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShellModule,
    // imported at last ever
    AppRoutingModule,

    StoreModule.forRoot({}, {}),

    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
