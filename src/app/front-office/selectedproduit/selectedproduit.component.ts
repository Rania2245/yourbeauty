import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css'],
})
export class SelectedproduitComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ServiceService
  ) {}
  idProduit!: number;
  produit!: Produits;

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
    this.produitService.getProduitById(this.idProduit).subscribe((data) => {
      this.produit = data;
    });
  }
}
