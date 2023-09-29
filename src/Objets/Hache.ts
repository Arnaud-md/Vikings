import { Personnage } from "../Personnage/Personnage";
import { Arme } from "./Arme";

export class Hache extends Arme{
    //private _nomHache: string;
    private _forceHache: number;
    private _vitesseHache: number;
    private _intelligenceHache: number;
    public capaciteSpeciale() {

    }
    constructor(prix:number,poids:number,niveau:number,nom:string,forceHache:number,vitesseHache:number,intelligenceHache:number) {
        super(prix,poids,niveau,nom);
        //this._nomHache=nomHache;
        this._forceHache=forceHache;
        this._vitesseHache=vitesseHache;
        this._intelligenceHache=intelligenceHache;
    }
    public use(perso:Personnage):void{
        this.equipe(perso);
        console.log(perso.nom+" s'est équipé de la hache : "+this.nom);
    }
    public equipe(perso:Personnage):void{
        perso.force+=this._forceHache;
        perso.vitesse+=this._vitesseHache;
        perso.intelligence+=this._intelligenceHache;
    }
    // public get nomHache(): string {
    //     return this._nomHache;
    // }
    // public set nomHache(value: string) {
    //     this._nomHache = value;
    // }
    public get forceHache(): number {
        return this._forceHache;
    }
    public set forceHache(value: number) {
        this._forceHache = value;
    }
    public get vitesseHache(): number {
        return this._vitesseHache;
    }
    public set vitesseHache(value: number) {
        this._vitesseHache = value;
    }
    public get intelligenceHache(): number {
        return this._intelligenceHache;
    }
    public set intelligenceHache(value: number) {
        this._intelligenceHache = value;
    }
}