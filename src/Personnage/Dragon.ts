import { Personnage } from "./Personnage";
import { SorteDragon } from "./SorteDragon";

export class Dragon extends SorteDragon {
    
    constructor() {
        super("Dragon gardant un trésor");
        this.niveau = 4;
        this.experience = 1000;
        this.santeInitiale = 150;
        this.sante = this.santeInitiale;
        this.force = 19;
        this.vitesse = 15;
        this.intelligence = 10;
        this.pointsMana = 15;
        this.manaInitiale = 15;
        this.chancesCritiques = 0.15;
    }
}
