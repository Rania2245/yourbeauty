import { Commentaire } from './commentaire';

export class Produits {
  constructor(
    public id: number,
    public prix: number,
    public img: string,
    public description: string,
    public reference: string,
    public dispo: boolean,
    public marque: string,
    public comments: Commentaire[]
  ) {}
}
