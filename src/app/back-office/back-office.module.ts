import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    AjoutproduitComponent,

    DashboardComponent,
     ModifierProduitComponent,
  ],
  imports: [CommonModule, BackOfficeRoutingModule, ReactiveFormsModule],
})
export class BackOfficeModule {}
