import { Arme } from "./Arme"
import { TypePersonnage } from "./TypesPersonnages/TypePersonnage"
export class Personnage {

    private _nom: string
    private _sante: number
    private santeInitiale: number
    private _force: number
    //private arme: Arme
    private _niveau: number
    private _experience: number
    private _typePersonnage: TypePersonnage
    private _vitesse: number
    private _intelligence: number
    private _pointsMana: number
    private _chancesCritiques: number
    //private _equipement: Equipement

    constructor(
        //arme: Arme
    ) {
        this._nom = "";
        this._typePersonnage=new TypePersonnage("",0,0,0,0,0,0);
        
        this.santeInitiale = 50+this._typePersonnage.santeBonus();
        this._sante = 50+this._typePersonnage.santeBonus();
        this._force = 10+this._typePersonnage.forceBonus();
        //this.arme = arme
        this._niveau = 1;
        this._experience = 0;
        
        this._vitesse = 10+this._typePersonnage.vitesseBonus();
        this._intelligence = 10+this._typePersonnage.intelligenceBonus();
        this._pointsMana = 50+this._typePersonnage.manaBonus();
        this._chancesCritiques = 0.02+this._typePersonnage.critiqueBonus();
    }

    public fight(otherPerson: Personnage) {
        const attackValue = this.getAttackValue()
        //const soinsValue = this.getHealedValueFromAttaque(attackValue)
        otherPerson.receiveAttack(attackValue)
        //this.heal(soinsValue)
    }

     public get nom(): string {
        return this._nom;
    }
    public set nom(nom:string) {
        this._nom=nom;
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
    public get typePersonnage():TypePersonnage {
        return this._typePersonnage;
    }
    public set typePersonnage(typePersonnage:TypePersonnage) {
        this._typePersonnage=typePersonnage;
    }
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
    public get chancesCritiques(): number {
        return this._chancesCritiques;
    }
    public set chancesCritiques(chancesCritiques:number) {
        this._chancesCritiques=chancesCritiques;
    }

    private getAttackValue(): number {
        let attackValue = this.force
        if(Math.random() < 0.1) {
            attackValue *= 2
        }
        return attackValue
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

    private receiveAttack(amount: number){
        //let totalLifeToLose = amount - this.defense
        let totalLifeToLose = amount
        if(totalLifeToLose > 0) {
            this.sante -= totalLifeToLose
        }
        if(this.sante < 0) {
            this.sante = 0
        }
    }

}