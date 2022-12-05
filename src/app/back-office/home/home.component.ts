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
  mot: string = '';
  produitsAffiches!: Produits[];

  constructor(private produitService: ServiceService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data) => {
      this.lesProduits = data;
      this.produitsAffiches = data;
    });
  }

  Rechercher() {
    if (this.mot == '') {
      this.produitsAffiches = this.lesProduits;
    } else {
      this.produitsAffiches = this.lesProduits.filter(
        (data) =>
          data.marque.toLocaleLowerCase() == this.mot.toLocaleLowerCase()
      );
    }
  }

  supprimer(produit: Produits, index: number) {
    this.produitService.supprimerProduit(produit).subscribe(() => {
      this.lesProduits.splice(index, 1);
      this.produitsAffiches = this.lesProduits;
    });
  }
}
