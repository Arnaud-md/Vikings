import { Personnage } from "../Personnage/Personnage";
import { Equipable } from "./Equipable";

export abstract class Arme extends Equipable {
    constructor(prix:number,poids:number,niveau:number,nom:string) {
        super(prix,poids,niveau,nom);
    }
    public use(perso:Personnage):void{

    }
    public equipe(perso:Personnage):void{
    }
}