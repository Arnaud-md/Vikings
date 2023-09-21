import { Arme } from "./Arme"
export class Personnage {

    private _nom: string
    private _sante: number
    private santeInitiale: number
    private _force: number
    private arme: Arme
    private defenseInitiale: number
    private _niveau: number
    private _experience: number
    private _typePersonnage: TypePersonnage
    private _vitesse: number
    private _intelligence: number
    private _pointsMana: number
    private _chancesCritiques: number
    private _equipement: equipement

    constructor(
        nom: string,
        sante: number,
        santeInitiale: number,
        force: number,
        arme: Arme,
        defenseInitiale: number,
        typePersonnage: TypePersonnage
        vitesse: number
        intelligence

    ) {
        this._nom = nom
        this._sante = sante
        this.santeInitiale = santeInitiale
        this._force = force
        this.arme = arme
        this.defenseInitiale = defenseInitiale
        this._niveau = 1;
        this._experience = 0;
        this._typePersonnage=typePersonnage
    }

    public fight(otherPerson: Personnage) {
        const attackValue = this.getAttackValue()
        const soinsValue = this.getHealedValueFromAttaque(attackValue)
        otherPerson.receiveAttack(attackValue)
        this.heal(soinsValue)
    }

     public get nom(): string {
         return this._nom;
    }
    // public set nom(nom:string) {
    //     this._nom=nom;
    // }
    public get sante(): number {
        return this._sante;
    }
    public set sante(sante:number) {
        this._sante=sante;
    }
    public get force(): number {
        return this._force + this.arme.force
    }

    private getAttackValue(): number {
        let attackValue = this.force
        if(Math.random() < 0.1) {
            attackValue *= 2
        }
        return attackValue
    }

    private getHealedValueFromAttaque(attaqueValue: number): number {
        let soinsValue = 0
        if(this.arme.isLameDeSang()){
            soinsValue = Math.floor(attaqueValue * 0.13)
        }
        return soinsValue
    }

    private heal(amount: number) {
        this.sante += amount
        if(this.sante > this.santeInitiale) {
            this.sante = this.santeInitiale
        }
    }

    private receiveAttack(amount: number){
        let totalLifeToLose = amount - this.defense
        if(totalLifeToLose > 0) {
            this.sante -= totalLifeToLose
        }
        if(this.sante < 0) {
            this.sante = 0
        }
    }

}