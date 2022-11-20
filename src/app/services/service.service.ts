import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produits } from '../classes/produits';
const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(URL);
  }
}
