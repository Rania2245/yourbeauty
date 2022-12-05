import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lesProduits!: Produits[];

  constructor(private produitService: ServiceService) {}

  ngOnInit(): void {
    this.produitService
      .getProduits()
      .subscribe((data) => (this.lesProduits = data));
  }

  supprimer(produit: Produits, index: number) {
    console.log(produit);
    this.produitService.supprimerProduit(produit).subscribe(() => {
      this.lesProduits.splice(index, 1);
    });
  }
}
