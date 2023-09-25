import { TypePersonnage } from "./TypePersonnage";

export class Viking extends TypePersonnage {
    //private _nomPersonnage: string
    private static nomtype : string = "Viking";
    constructor() {
        super(Viking.nomtype,25,4,2,0,0,0.08);
        //this._nomPersonnage=nomPersonnage;
    }
}