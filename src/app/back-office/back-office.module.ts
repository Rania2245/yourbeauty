import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
