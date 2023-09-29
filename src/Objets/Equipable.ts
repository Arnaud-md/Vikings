import { Personnage } from "../Personnage/Personnage";
import { IObjet } from "./IObjet";

export abstract class Equipable implements IObjet{
    private _prix: number;
    private _poids: number;
    private _niveau: number;
    private _nom: string;


    constructor(prix:number,poids:number,niveau:number,nom:string) {
        this._prix=prix;
        this._poids=poids;
        this._niveau=niveau;
        this._nom=nom;
    }
    public use(perso:Personnage):void{

    }
    public equipe(perso:Personnage):void{
    }

    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get poids(): number {
        return this._poids;
    }
    public set poids(value: number) {
        this._poids = value;
    }
    public get niveau(): number {
        return this._niveau;
    }
    public set niveau(value: number) {
        this._niveau = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
}