export class Commentaire {
  constructor(
    public id: number,
    public msg: string,
    public date: string,
    public idProduit: number
  ) {}
}
