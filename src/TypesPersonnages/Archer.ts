import { TypePersonnage } from "./TypePersonnage";

export class Archer extends TypePersonnage {
    private _nomPersonnage: string
    private static nomtype : string = "Archer";
    constructor(nomPersonnage: string) {
        super(Archer.nomtype,15,2,3,1,10,0.05);
        this._nomPersonnage=nomPersonnage;
    }
}