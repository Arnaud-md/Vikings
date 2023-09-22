import { TypePersonnage } from "./TypePersonnage";

export class Magicien extends TypePersonnage {
    private _nomPersonnage: string
    private static nomtype : string = "Magicien";
    constructor(nomPersonnage: string) {
        super(Magicien.nomtype,5,1,1,5,45,0);
        this._nomPersonnage=nomPersonnage;
    }
}