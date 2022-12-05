import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produits } from 'src/app/classes/produits';
import { Commentaire } from 'src/app/classes/commentaire';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css'],
})
export class SelectedproduitComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService
  ) {}
  idProduit!: number;
  produit!: Produits;
  comments!: Commentaire[];

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.service.getProduitById(this.idProduit).subscribe((data) => {
      this.produit = data;
    });
    this.service.getComments().subscribe((data) => {
      this.comments = data.filter((e) => e.idProduit == this.idProduit);
      console.log(this.comments);
    });
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
