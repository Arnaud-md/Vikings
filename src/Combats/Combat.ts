import { Personnage } from "../Personnage/Personnage"
export class Combat {

    private _personnages: Personnage[]

    constructor(
        Personnages: Personnage[],
    ) {
        this._personnages = Personnages
    }

    public simulate() {
        let fighterIndex = this.firstPersonnage.force > this.secondPersonnage.force ? 1 : 0
        
        while (this.firstPersonnage.sante > 0 && this.secondPersonnage.sante > 0) {
            const fighterPersonnage = this._personnages[fighterIndex]
            const defenserPersonnage = this._personnages[1 - fighterIndex]
            
            fighterPersonnage.fight(defenserPersonnage)
            // Ajout d'un console log pour observer le combat
            console.log("le Personnage : "+fighterPersonnage.nom+" a donné un coup au Personnage : "+defenserPersonnage.nom);
            console.log("le Personnage : "+fighterPersonnage.nom+" a une santé de : "+fighterPersonnage.sante+" et le Personnage : "+defenserPersonnage.nom+" a une santé de : "+defenserPersonnage.sante);

            fighterIndex = 1 - fighterIndex
        }
    }

    public afficherVainqueur() {
        const vainqueur = this.firstPersonnage.sante > 0 ? this.firstPersonnage : this.secondPersonnage
        console.log(`${vainqueur.nom} a gagné !`)
    }

    get firstPersonnage(): Personnage {
        return this._personnages[0]
    }

    get secondPersonnage(): Personnage {
        return this._personnages[1]
    }

    get Personnages() {
        return this._personnages;
    }
    set Personnages(Personnages: Personnage[]) {
        this._personnages=Personnages;
    }
}