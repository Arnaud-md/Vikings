import { Personnage } from "../Personnage/Personnage";
import { Equipable } from "./Equipable";
export interface IObjet {
    // _prix:number;
    // _poids:number;
    use(perso: Personnage):void;
}