import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PanierComponent } from './panier/panier.component';

import { ProduitComponent } from './produit/Produit.component';
import { SelectedproduitComponent } from './selectedproduit/selectedproduit.component';
import { YourbeautyComponent } from './yourbeauty/yourbeauty.component';

const routes: Routes = [
  { path: 'home', title: 'home', component: HomeComponent },
  { path: 'produit', title: 'Produit', component: ProduitComponent },
  {
    path: 'selectedproduit/:id',
    title: 'Produit choisi',
    component: SelectedproduitComponent,
  },
  {
    path: 'panier',
    title: 'votre panier ',
    component: PanierComponent,
  },

  { path: 'yourbeauty', title: 'yourbeauty', component: YourbeautyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontOfficeRoutingModule {}
