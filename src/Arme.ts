export class Arme {

    private nom: string
    private _force: number

    constructor(
        nom: string,
        force: number,
    ) {
        this.nom = nom
        this._force = force
    }

    public get force(){
        return this._force;
    }

    public isLameDeSang(): boolean {
        return this.nom === 'Lame de sang'
    }
}