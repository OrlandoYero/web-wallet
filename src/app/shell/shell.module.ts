import { RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShellEffects } from './+store/effects/shell.effects';
import * as fromShell from './+store/reducers';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ShellComponent, PageNotFoundComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    EffectsModule.forFeature([ShellEffects]),
    StoreModule.forFeature(fromShell.shellFeatureKey, fromShell.reducers, { metaReducers: fromShell.metaReducers })
  ],
  exports: []
})
export class ShellModule { }
