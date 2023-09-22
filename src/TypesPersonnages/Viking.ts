import { TypePersonnage } from "./TypesPersonnages/TypePersonnage";

export class Viking extends TypePersonnage {
    // constructor(nom :string) {
    //     Personnage.nom =
    // }
    private _nomPersonnage: string
    private static nomtype : string = "Viking";
    constructor(nomPersonnage: string) {
        super(Viking.nomtype,25,4,2,0,0,0.08);
        this._nomPersonnage=nomPersonnage;
    }


}