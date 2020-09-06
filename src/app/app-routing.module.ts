import { AuthenticationGuard } from '@core/guards/authentication.guard';
import { ShellComponent } from './shell/components/shell/shell.component';
import { PageNotFoundComponent } from '@shell/components/page-not-found/page-not-found.component';
import { LoginComponent } from '@shell/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomPreloaderStrategy } from '@core/custom-preloader-strategy';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
        data: { preload: true }
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: CustomPreloaderStrategy,
        // enableTracing: !environment.production
      }
    )
  ],
  exports: [RouterModule],
  providers: [CustomPreloaderStrategy]
})
export class AppRoutingModule { }
