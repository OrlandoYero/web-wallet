import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shell/components/page-not-found/page-not-found.component';
import { LoginComponent } from './shell/components/login/login.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { MainComponent } from './shell/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
        data: { preload: true }
      },
      // {
      //   path: 'user',
      //   loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule),
      // },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
