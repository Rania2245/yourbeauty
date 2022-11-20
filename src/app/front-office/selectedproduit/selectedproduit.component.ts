import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css'],
})
export class SelectedproduitComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  idProduit!: number;

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.params['id'];
  }
}
