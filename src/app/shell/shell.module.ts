import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { SidevarComponent } from './components/sidevar/sidevar.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, LoginComponent, PageNotFoundComponent, MainComponent, SidevarComponent],
  imports: [
    CommonModule,
    SharedModule,

    RouterModule
  ]
})
export class ShellModule { }
