import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  aux: boolean = false;
  lesProduits!: Produits[];

  constructor(private produitService: ServiceService) {}

  ngOnInit(): void {
    this.produitService
      .getProduits()
      .subscribe((data) => (this.lesProduits = data));
  }
  ajoutPanier(produit: Produits) {
    const panier = localStorage.getItem('panier');
    if (panier === null) {
      const newpanier: Produits[] = [produit];
      localStorage.setItem('panier', JSON.stringify(newpanier));
    } else {
      const parsedpanier = JSON.parse(panier);
      parsedpanier.push(produit);
      localStorage.setItem('panier', JSON.stringify(parsedpanier));
    }
  }
}
