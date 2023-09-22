export class TypePersonnage {
    private _nomType: string
    private _vieBonus: number
    private _forceBonus: number
    private _vitesseBonus: number
    private _intelligenceBonus: number
    private _manaBonus: number
    private _critiqueBonus: number
   
    constructor(nomType: string, vieBonus: number, forceBonus: number, vitesseBonus: number, intelligenceBonus: number, manaBonus: number, critiqueBonus: number) {
        this._nomType=nomType
        this._vieBonus=vieBonus
        this._forceBonus=forceBonus
        this._vitesseBonus=vitesseBonus
        this._intelligenceBonus=intelligenceBonus;
        this._manaBonus=manaBonus;
        this._critiqueBonus=critiqueBonus;
    }
    public santeBonus(): number {
        return this._vieBonus;
    }
    public forceBonus(): number {
        return this._forceBonus;
    }
    public vitesseBonus(): number {
        return this._vitesseBonus;
    }
    public intelligenceBonus(): number {
        return this._intelligenceBonus;
    }
    public manaBonus(): number {
        return this._manaBonus;
    }
    public critiqueBonus(): number {
        return this._critiqueBonus;
    }
}