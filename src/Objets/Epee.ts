import { Personnage } from "../Personnage/Personnage";
import { Arme } from "./Arme";

export class Epee extends Arme{
    //private _nomEpee: string;
    private _forceEpee: number;
    private _vitesseEpee: number;
    private _intelligenceEpee: number;
    public capaciteSpeciale() {

    }
    constructor(prix:number,poids:number,niveau:number,nom:string,forceEpee:number,vitesseEpee:number,intelligenceEpee:number) {
        super(prix,poids,niveau,nom);
        //this._nomEpee=nomEpee;
        this._forceEpee=forceEpee;
        this._vitesseEpee=vitesseEpee;
        this._intelligenceEpee=intelligenceEpee;
    }
    public use(perso:Personnage):void{
        this.equipe(perso);
        console.log(perso.nom+" s'est équipé de l'épée : "+this.nom);
    }
    public equipe(perso:Personnage):void{
        perso.force+=this._forceEpee;
        perso.vitesse+=this._vitesseEpee;
        perso.intelligence+=this._intelligenceEpee;
    }

    // public get nomEpee(): string {
    //     return this._nomEpee;
    // }
    // public set nomEpee(value: string) {
    //     this._nomEpee = value;
    // }
    public get forceEpee(): number {
        return this._forceEpee;
    }
    public set forceEpee(value: number) {
        this._forceEpee = value;
    }
    public get vitesseEpee(): number {
        return this._vitesseEpee;
    }
    public set vitesseEpee(value: number) {
        this._vitesseEpee = value;
    }
    public get intelligenceEpee(): number {
        return this._intelligenceEpee;
    }
    public set intelligenceEpee(value: number) {
        this._intelligenceEpee = value;
    }
}