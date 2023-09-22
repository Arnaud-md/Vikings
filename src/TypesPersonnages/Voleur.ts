import { TypePersonnage } from "./TypePersonnage";

export class Voleur extends TypePersonnage {
    private _nomPersonnage: string
    private static nomtype : string = "Voleur";
    constructor(nomPersonnage: string) {
        super(Voleur.nomtype,5,1,1,5,45,0);
        this._nomPersonnage=nomPersonnage;
    }
}