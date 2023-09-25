import { TypePersonnage } from "./TypePersonnage";

export class Chevalier extends TypePersonnage {
    private static nomtype : string = "Chevalier";
    constructor() {
        super(Chevalier.nomtype,40,5,1,1,5,0.03);
    }
}