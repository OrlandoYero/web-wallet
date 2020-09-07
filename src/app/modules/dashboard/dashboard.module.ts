import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewComponent } from './page/view/view.component';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './+store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './+store/dashboard.effects';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,

    TranslateModule,
    SharedModule,

    DashboardRoutingModule,

    StoreModule.forFeature(fromStore.dashboardFeatureKey, fromStore.reducers, { metaReducers: fromStore.metaReducers }),

    EffectsModule.forFeature([DashboardEffects]),
  ]
})
export class DashboardModule { }
