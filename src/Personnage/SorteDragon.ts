import { Monstre } from "./Monstre";
import SorteMonstre from "./SorteMonstre";

export abstract class SorteDragon extends Monstre {

    private static sorteMonstre = SorteMonstre.Dragon

    constructor(nom: string) {
        super(nom, SorteDragon.sorteMonstre);
    }

}