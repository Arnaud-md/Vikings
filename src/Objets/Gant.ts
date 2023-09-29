import { Personnage } from "../Personnage/Personnage";
import { Armure } from "./Armure";

export class Gant extends Armure{
    private _protection: number;

    private _forceArmure: number;
    private _vitesseArmure: number;
    private _intelligenceArmure: number;
    public capaciteSpeciale() {

    }
    constructor(prix:number,poids:number,niveau:number,nom:string,protection:number,forceArmure:number,vitesseArmure:number,intelligenceArmure:number) {
        super(prix,poids,niveau,nom);
        this._protection=protection;
        this._forceArmure=forceArmure;
        this._vitesseArmure=vitesseArmure;
        this._intelligenceArmure=intelligenceArmure;
    }

    public use(perso:Personnage):void{
        this.equipe(perso);
        console.log(perso.nom+" s'est équipé du gant : "+this.nom);
    }
    public equipe(perso:Personnage):void{
        perso.armure+=this._protection;
        perso.force+=this._forceArmure;
        perso.vitesse+=this._vitesseArmure;
        perso.intelligence+=this._intelligenceArmure;
        perso.equipement.push(this);
    }

    public get protection(): number {
        return this._protection;
    }
    public set protection(value: number) {
        this._protection = value;
    }
    public get forceArmure(): number {
        return this._forceArmure;
    }
    public set forceArmure(value: number) {
        this._forceArmure = value;
    }
    public get vitesseArmure(): number {
        return this._vitesseArmure;
    }
    public set vitesseArmure(value: number) {
        this._vitesseArmure = value;
    }
    public get intelligenceArmure(): number {
        return this._intelligenceArmure;
    }
    public set intelligenceArmure(value: number) {
        this._intelligenceArmure = value;
    }
}