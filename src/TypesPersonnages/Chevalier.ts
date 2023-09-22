import { TypePersonnage } from "./TypePersonnage";

export class Chevalier extends TypePersonnage {
    private _nomPersonnage: string
    private static nomtype : string = "Chevalier";
    constructor(nomPersonnage: string) {
        super(Chevalier.nomtype,40,5,1,1,5,0.03);
        this._nomPersonnage=nomPersonnage;
    }
}