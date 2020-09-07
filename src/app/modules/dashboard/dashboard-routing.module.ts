import { ViewComponent } from './page/view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@i18n/services/i18n.service';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    data: { title: extract('HOME.TITLE') }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
