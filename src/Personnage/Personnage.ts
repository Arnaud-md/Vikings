
import { Consommable } from "../Objets/Consommable";
import { Equipable } from "../Objets/Equipable"
import { TypePersonnage } from "../TypesPersonnages/TypePersonnage"
export abstract class Personnage {
 
    private _equipement: Equipable[];

    private _consommable: Consommable[];

    private _nom: string

    private _armure: number;

    private _sante: number
    private _santeInitiale: number
    private _force: number
    //private arme: Arme
    private _niveau: number
    private _experience: number
//    private _typePersonnage: TypePersonnage
    private _vitesse: number
    private _intelligence: number
    private _pointsMana: number
    private _manaInitiale: number
    private _chancesCritiques: number
    //private _equipement: Equipement
    

    constructor(
        nom: string,
        // equipement: Equipable[],
        // consommable: Consommable[]
        //arme: Arme
        
        //typePersonnage: TypePersonnage
    ) {
        // this._equipement=equipement;
        // this._consommable=consommable;
        this._nom = nom;
        //this._typePersonnage=typePersonnage;
        this._armure = 0;
        
    //    this._santeInitiale = 50+this._typePersonnage.santeBonus();
        this._santeInitiale = 50;
    //    this._sante = 50+this._typePersonnage.santeBonus();
        this._sante = this._santeInitiale;
    //    this._force = 10+this._typePersonnage.forceBonus();
        this._force = 10
        //this.arme = arme
    //    this._niveau = 1;
        this._niveau = 1;
        this._experience = 0;
        
    //    this._vitesse = 10+this._typePersonnage.vitesseBonus();
        this._vitesse = 10;
    //    this._intelligence = 10+this._typePersonnage.intelligenceBonus();
        this._intelligence = 10;
    //    this._pointsMana = 50+this._typePersonnage.manaBonus();
        this._pointsMana = 50;
    //    this._manaInitiale = 50+this._typePersonnage.manaBonus();
        this._manaInitiale = 50;
    //    this._chancesCritiques = 0.02+this._typePersonnage.critiqueBonus();
        this._chancesCritiques = 0.02;
        this._equipement = [];
        this._consommable = [];
    }

    // public fight(otherPerson: Personnage) {
    //     const attackValue = this.getAttackValue()
    //     //const soinsValue = this.getHealedValueFromAttaque(attackValue)
    //     otherPerson.receiveAttack(attackValue)
    //     //this.heal(soinsValue)
    //}

    public get equipement(): Equipable[] {
        return this._equipement;
    }
    public set equipement(value: Equipable[]) {
        this._equipement = value;
    }
    public get consommable(): Consommable[] {
        return this._consommable;
    }
    public set consommable(value: Consommable[]) {
        this._consommable = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(nom:string) {
        this._nom=nom;
    }
    public get armure(): number {
        return this._armure;
    }
    public set armure(value: number) {
        this._armure = value;
    }
    public get sante(): number {
        return this._sante;
    }
    public set sante(sante:number) {
        this._sante=sante;
    }
    public get force(): number {
        //return this._force + this.arme.force
        return this._force
    }
    public set force(force:number) {
        this._force = force;
    }
    // public get typePersonnage():TypePersonnage {
    //     return this._typePersonnage;
    // }
    // public set typePersonnage(typePersonnage:TypePersonnage) {
    //     this._typePersonnage=typePersonnage;
    // }
    public get vitesse(): number {
        return this._vitesse;
    }
    public set vitesse(vitesse:number) {
        this._vitesse=vitesse;
    }
    public get intelligence(): number {
        return this._intelligence;
    }
    public set intelligence(intelligence:number) {
        this._intelligence=intelligence;
    }
    public get pointsMana(): number {
        return this._pointsMana;
    }
    public set pointsMana(pointsMana:number) {
        this._pointsMana=pointsMana;
    }
    public get manaInitiale(): number {
        return this._manaInitiale;
    }
    public set manaInitiale(manaInitiale:number) {
        this._manaInitiale=manaInitiale;
    }

    public get chancesCritiques(): number {
        return this._chancesCritiques;
    }
    public set chancesCritiques(chancesCritiques:number) {
        this._chancesCritiques=chancesCritiques;
    }

    public get santeInitiale(): number {
        return this._santeInitiale;
    }
    public set santeInitiale(santeInitiale:number) {
        this._santeInitiale=santeInitiale;
    } 

    public get experience(): number {
        return this._experience
    }
    public set experience(value: number) {
        this._experience = value
    }
    public get niveau(): number {
        return this._niveau
    }
    public set niveau(value: number) {
        this._niveau = value
    }
    

    // private getHealedValueFromAttaque(attaqueValue: number): number {
    //     let soinsValue = 0
    //     if(this.arme.isLameDeSang()){
    //         soinsValue = Math.floor(attaqueValue * 0.13)
    //     }
    //     return soinsValue
    // }

    private heal(amount: number) {
        this.sante += amount
        if(this.sante > this.santeInitiale) {
            this.sante = this.santeInitiale
        }
    }



}