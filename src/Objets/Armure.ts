import { Equipable } from "./Equipable";

export abstract class Armure extends Equipable {
    constructor(prix:number,poids:number,niveau:number,nom:string) {
        super(prix,poids,niveau,nom);
    }
}