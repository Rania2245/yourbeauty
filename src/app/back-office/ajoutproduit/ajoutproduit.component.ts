import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produits } from 'src/app/classes/produits';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css'],
})
export class AjoutproduitComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private produitService: ServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.nonNullable.group({
      prix: [0, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      dispo: ['', [Validators.required]],
      marque: ['', [Validators.required]],
    });
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

  ajouterProduit() {
    this.produitService.addProduit(this.productForm.value).subscribe();
  }

  onVider() {
    this.productForm.reset();
  }
}
