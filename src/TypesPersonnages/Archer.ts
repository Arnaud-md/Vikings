import { TypePersonnage } from "./TypePersonnage";

export class Archer extends TypePersonnage {
    private static nomtype : string = "Archer";
    constructor() {
        super(Archer.nomtype,15,2,3,1,10,0.05);
    }
}