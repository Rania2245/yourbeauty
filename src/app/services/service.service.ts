import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produits } from '../classes/produits';
import { Commentaire } from '../classes/commentaire';
import { User } from '../classes/user';
import { Marque } from '../classes/marque';

const URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  getProduits(): Observable<Produits[]> {
    return this.http.get<Produits[]>(`${URL}produits`);
  }
  getProduitById(id: number): Observable<Produits> {
    return this.http.get<Produits>(`${URL}produits/${id}`);
  }
  getComments(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${URL}comments`);
  }
  getMarque(): Observable<Marque[]> {
    return this.http.get<Marque[]>(`${URL}marque`);
  }

  addProduit(produit: Produits): Observable<Produits> {
    return this.http.post<Produits>(`${URL}produits`, produit);
  }

  supprimerProduit(produit: Produits): Observable<Produits> {
    return this.http.delete<Produits>(`${URL}produits/${produit.id}`);
  }
  updateProduit(p: Produits): Observable<Produits> {
    return this.http.put<Produits>(`${URL}produits/${p.id}`, p);
  }

  verifyUser(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${URL}user?email=${email}&password=${password}`
    );
  }
}
