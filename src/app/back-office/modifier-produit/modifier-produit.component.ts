import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css'],
})
export class ModifierProduitComponent implements OnInit {
  productForm!: FormGroup;
  produit!: Produits;
  productId: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      this.productId = idParam !== null ? parseInt(idParam) : 0;
      this.produitService.getProduitById(this.productId).subscribe((data) => {
        this.produit = data;
        this.createForm();
      });
    });
  }
  createForm() {
    this.productForm = this.fb.nonNullable.group({
      id: [this.productId, [Validators.required]],
      prix: [
        this.produit.prix,
        [Validators.required, Validators.pattern('^[1-9][0-9]*$')],
      ],
      img: [this.produit.img, [Validators.required]],
      description: [this.produit.description, [Validators.required]],
      reference: [this.produit.reference, [Validators.required]],
      dispo: [this.produit.dispo, [Validators.required]],
      marque: [this.produit.marque, [Validators.required]],
    });
  }

  get id() {
    return this.productForm.get('id');
  }
  get prix() {
    return this.productForm.get('prix');
  }
  get img() {
    return this.productForm.get('img');
  }
  get description() {
    return this.productForm.get('description');
  }

  get reference() {
    return this.productForm.get('reference');
  }
  get dispo() {
    return this.productForm.get('dispo');
  }
  get marque() {
    return this.productForm.get('marque');
  }

  onModifier() {
    console.log(this.productForm.value);
    this.produitService
      .updateProduit(this.productForm.value)
      .subscribe((data) => console.log(data));
  }

  onVider() {
    this.productForm.reset();
  }
}
