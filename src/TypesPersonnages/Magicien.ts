import { TypePersonnage } from "./TypePersonnage";

export class Magicien extends TypePersonnage {
    private static nomtype : string = "Magicien";
    constructor() {
        super(Magicien.nomtype,5,1,1,5,45,0);
    }
}