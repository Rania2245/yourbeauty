import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './erreur/erreur.component';
import { HomeComponent } from './front-office/home/home.component';
import { ProduitComponent } from './front-office/produit/Produit.component';
import { SelectedproduitComponent } from './front-office/selectedproduit/selectedproduit.component';
import { YourbeautyComponent } from './front-office/yourbeauty/yourbeauty.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./front-office/front-office.module').then(
        (m) => m.FrontOfficeModule
      ),
  },
  {
    path: 'back',
    loadChildren: () =>
      import('./back-office/back-office.module').then(
        (m) => m.BackOfficeModule
      ),
  },
  { path: '**', title: 'Erreur', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
