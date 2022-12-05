import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontOfficeRoutingModule } from './front-office-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProduitComponent } from './produit/Produit.component';
import { YourbeautyComponent } from './yourbeauty/yourbeauty.component';
import { SelectedproduitComponent } from './selectedproduit/selectedproduit.component';
import { PanierComponent } from './panier/panier.component';

import { DinarPipe } from './pipes/dinar.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    ProduitComponent,
    YourbeautyComponent,
    SelectedproduitComponent,
    PanierComponent,

    DinarPipe,
  ],
  imports: [
    CommonModule,
    FrontOfficeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FrontOfficeModule {}
