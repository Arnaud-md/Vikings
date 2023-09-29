import { Consommable } from "../Objets/Consommable";
import { Equipable } from "../Objets/Equipable";
import { TypePersonnage } from "../TypesPersonnages/TypePersonnage"
import { Personnage } from "./Personnage"
export class Hero extends Personnage{
    private _typePersonnage: TypePersonnage;

    constructor(nom:string, typePersonnage:TypePersonnage) {
        super(nom);
        this._typePersonnage=typePersonnage;
        this.armure = 0;
        this.santeInitiale = 50+this._typePersonnage.santeBonus();
        this.sante = 50+this._typePersonnage.santeBonus();
        this.force = 10+this._typePersonnage.forceBonus();
        this.vitesse = 10+this._typePersonnage.vitesseBonus();
        this.intelligence = 10+this._typePersonnage.intelligenceBonus();
        this.pointsMana = 50+this._typePersonnage.manaBonus();
        this.manaInitiale = 50+this._typePersonnage.manaBonus();
        this.chancesCritiques = 0.02+this._typePersonnage.critiqueBonus();
    }
    public get typePersonnage(): TypePersonnage {
        return this._typePersonnage;
    }
    public set typePersonnage(value: TypePersonnage) {
        this._typePersonnage = value;
    }
}