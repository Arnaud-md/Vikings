import { Personnage } from "../Personnage";

export class CombatHandler {
    private _p1: Personnage
    private _p2: Personnage
    constructor(p1: Personnage,p2: Personnage) {
        this._p1=p1;
        this._p2=p2;
    }

    private getAttackValue(ordrePJ:Personnage[]): [number,number] {
        let attackValue = ordrePJ[0].force
        let isCoupCritique = 1;
        if (ordrePJ[1].typePersonnage.nomType=="Chevalier") {
            attackValue = 0.75*attackValue;
        }
        
        if(Math.random() < ordrePJ[0].chancesCritiques) {
            if(ordrePJ[0].typePersonnage.nomType!="Voleur") {
                attackValue *= 2;
            }
            else {
                attackValue *= 2.5;
                isCoupCritique = 2;
            }
        }
        if(ordrePJ[0].typePersonnage.nomType=="Magicien" && ordrePJ[0].pointsMana>=0.55*ordrePJ[0].manaInitiale) {
            attackValue = 1.75*ordrePJ[0].intelligence;
            ordrePJ[0].pointsMana -= 35;
        }
        return [attackValue,isCoupCritique]

    }

    private receiveAttack(ordrePJ:Personnage[], amount: number){
        //let totalLifeToLose = amount - this.defense
        let totalLifeToLose = amount
        if(totalLifeToLose > 0) {
            ordrePJ[1].sante -= totalLifeToLose
        }
        if(ordrePJ[1].sante < 0) {
            ordrePJ[1].sante = 0
        }
    }

    public fight() {
        let numAttack = 1;
        let ordrePJ=[this._p1,this._p2]
        while (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0 && numAttack<20) {
            if (this._p1.vitesse<this._p2.vitesse) {
                ordrePJ=[this._p2,this._p1];
            }
            for (let i=0; i<ordrePJ.length;i++) {
                if (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0) {
                    this.beforeAttack([ordrePJ[i],ordrePJ[1-i]],this.getAttackValue([ordrePJ[i],ordrePJ[1-i]])[0],numAttack);
                    console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" avant combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                    if(numAttack!=1 || ordrePJ[0].typePersonnage.nomType!="Archer") {
                        if(ordrePJ[0].typePersonnage.nomType!="Magicien" || ordrePJ[0].pointsMana<0.55*ordrePJ[0].manaInitiale) {
                            this.receiveAttack([ordrePJ[i],ordrePJ[1-i]],this.getAttackValue([ordrePJ[i],ordrePJ[1-i]])[0]);
                            console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" pendant combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                        }
                    }
                    this.afterAttack([ordrePJ[i],ordrePJ[1-i]],this.getAttackValue([ordrePJ[i],ordrePJ[1-i]])[0]);
                    console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" après combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                    console.log("**************************************");
                    //onHit();
                }
                if (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0 && this.getAttackValue([ordrePJ[i],ordrePJ[1-i]])[1] == 2) {
                    this.receiveAttack([ordrePJ[i],ordrePJ[1-i]],this.getAttackValue([ordrePJ[i],ordrePJ[1-i]])[0]);
                    console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" pendant combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                }
                
            }
            for (let i=0; i<ordrePJ.length;i++) {
                if (ordrePJ[0].typePersonnage.nomType=="Magicien") {
                    if (ordrePJ[0].pointsMana+ordrePJ[0].intelligence*0.5<=ordrePJ[0].manaInitiale) {
                        ordrePJ[0].pointsMana+=ordrePJ[0].intelligence*0.5;
                    }
                    else {
                    ordrePJ[0].pointsMana=ordrePJ[0].manaInitiale;
                    }
                }
            }
            console.log(numAttack);
            numAttack++;
        }
    }
    public beforeAttack(ordrePJ:Personnage[],degatsArcher:number, numAttack:number){
        if (ordrePJ[1].typePersonnage.nomType=="Archer") {
            if (ordrePJ[1].vitesse>=ordrePJ[0].vitesse) {
                if (numAttack==1) {
                    ordrePJ[0].sante -= 2.5*degatsArcher;
                }
            }
        }
    }

    public afterAttack(ordrePJ:Personnage[], degats:number){
        const multVolVieViking = 0.15;
        const multVolManaViking = 0.03;
        if (ordrePJ[0].typePersonnage.nomType=="Viking") {
            ordrePJ[0].sante = ordrePJ[0].sante + multVolVieViking*degats;
            ordrePJ[0].pointsMana += multVolManaViking*degats;
        }
    }
}