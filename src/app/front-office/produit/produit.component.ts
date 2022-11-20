import { Component, OnInit } from '@angular/core';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';

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
}
