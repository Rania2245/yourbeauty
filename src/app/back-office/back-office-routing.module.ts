import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { AuthEmpGuard } from './auth-emp.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginguardGuard } from './loginguard.guard';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthEmpGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'ajoutproduit', component: AjoutproduitComponent },

      {
        path: 'modifier-produit/:id',
        title: 'modifier produit',
        component: ModifierProduitComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginguardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackOfficeRoutingModule {}
