import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/classes/produits';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  constructor() {}
  panier: Produits[] = [];
  ngOnInit(): void {
    this.initPanier();
  }
  initPanier() {
    const jsonPanier = localStorage.getItem('panier');
    if (jsonPanier !== null) this.panier = JSON.parse(jsonPanier);
    else this.panier = [];
  }
  supprimerProduit(index: number) {
    const jsonPanier = localStorage.getItem('panier');
    if (jsonPanier !== null) {
      const parsedpanier = JSON.parse(jsonPanier);
      parsedpanier.splice(index, 1);
      localStorage.setItem('panier', JSON.stringify(parsedpanier));
      this.initPanier();
    }
  }
}
