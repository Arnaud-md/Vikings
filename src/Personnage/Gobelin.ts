import { Personnage } from "./Personnage"; 
import { SorteGobelin } from "./SorteGobelin";

export class Gobelin extends SorteGobelin {
    
    constructor() {
        super("Gobelin avec une longue vue");
        this.niveau = 1;
        this.experience = 110;
        this.santeInitiale = 20;
        this.sante = this.santeInitiale;
        this.force = 6;
        this.vitesse = 3;
        this.intelligence = 0;
        this.pointsMana = 0;
        this.manaInitiale = 0;
        this.chancesCritiques = 0.01;
    }

}
