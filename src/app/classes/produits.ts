import { Commentaire } from './commentaire';
import { Marque } from './marque';

export class Produits {
  constructor(
    public id: number,
    public prix: number,
    public img: string,
    public libelle: string,
    public reference: string,
    public dispo: boolean,
    public marque: Marque,
    public comments: Commentaire[]
  ) {}
}
