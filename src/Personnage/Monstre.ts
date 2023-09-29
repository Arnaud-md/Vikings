import { Consommable } from "../Objets/Consommable";
import { Equipable } from "../Objets/Equipable";
import { Personnage } from "./Personnage";
import SorteMonstre from "./SorteMonstre";

export abstract class Monstre extends Personnage{
    private _sorteMonstre: SorteMonstre;


    constructor(nom : string, sorteMonstre : SorteMonstre) { 
        super(nom);
        this._sorteMonstre = sorteMonstre;     
    }

    public get sorteMonstre(): SorteMonstre {
        return this._sorteMonstre;
    }
    public set sorteMonstre(value: SorteMonstre) {
        this._sorteMonstre = value;
    }
}