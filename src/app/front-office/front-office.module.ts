import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitComponent } from './produit/produit.component';
import { YourbeautyComponent } from './yourbeauty/yourbeauty.component';
import { ErreurComponent } from './erreur/erreur.component';
import { SelectedproduitComponent } from './selectedproduit/selectedproduit.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProduitComponent,
    YourbeautyComponent,
    ErreurComponent,
    SelectedproduitComponent,
    PanierComponent,
  ],
  imports: [CommonModule, FrontOfficeRoutingModule],
})
export class FrontOfficeModule {}
