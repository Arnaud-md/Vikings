import { Monstre } from "./Monstre";
import SorteMonstre from "./SorteMonstre";

export abstract class SorteGobelin extends Monstre {

    private static sorteMonstre = SorteMonstre.Goblinoid

    constructor(name: string) {
        super(name, SorteGobelin.sorteMonstre);
    }

}