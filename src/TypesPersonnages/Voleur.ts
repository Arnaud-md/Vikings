import { TypePersonnage } from "./TypePersonnage";

export class Voleur extends TypePersonnage {
    private static nomtype : string = "Voleur";
    constructor() {
        super(Voleur.nomtype,5,1,1,5,45,0);
    }
}