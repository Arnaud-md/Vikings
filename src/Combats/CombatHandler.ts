import { Personnage } from "../Personnage";

export class CombatHandler {
    private _p1: Personnage
    private _p2: Personnage
    constructor(p1: Personnage,p2: Personnage) {
        this._p1=p1;
        this._p2=p2;
    }

    private getAttackValue(tabPJ:Personnage[]): [number,number,number] {
        let attackValue = tabPJ[0].force
        let attackValueArcher = tabPJ[1].force;
        console.log(tabPJ[0].nom);
        console.log(attackValue);
        let isCoupCritique = 1;
        if (tabPJ[1].typePersonnage.nomType=="Chevalier") {
            attackValue = 0.75*attackValue;
        }
        if (tabPJ[0].typePersonnage.nomType=="Chevalier") {
            attackValueArcher *= 0.75;
        }
        
        if(Math.random() < tabPJ[0].chancesCritiques) {
            if(tabPJ[0].typePersonnage.nomType!="Voleur") {
                attackValue *= 2;
                attackValueArcher *=2;
            }
            else {
                attackValue *= 2.5;
                isCoupCritique = 2;
            }
        }
        if(tabPJ[0].typePersonnage.nomType=="Magicien" && tabPJ[0].pointsMana>=0.55*tabPJ[0].manaInitiale) {
            attackValue = 1.75*tabPJ[0].intelligence;
            tabPJ[0].pointsMana -= 35;
        }
        return [attackValue,isCoupCritique,attackValueArcher]

    }

    private getAttackValueVoleur(tabPJ:Personnage[]): number {
        let  attackValue = tabPJ[0].force
        let isCoupCritique = 1;
        if (tabPJ[1].typePersonnage.nomType=="Chevalier") {
            attackValue = 0.75*attackValue;
        }
        
        if(Math.random() < tabPJ[0].chancesCritiques) {
            attackValue *= 2.5;
            isCoupCritique = 2;
        }
        return attackValue
    }

    private receiveAttack(tabPJ:Personnage[], amount: number){
        //let totalLifeToLose = amount - this.defense
        let totalLifeToLose = amount
        if(totalLifeToLose > 0) {
            tabPJ[1].sante -= totalLifeToLose
        }
        if(tabPJ[1].sante < 0) {
            tabPJ[1].sante = 0
        }
    }

    private oneTurn(ordrePJ:Personnage[], numAttack:number) {
        let tabPJ = [];
        let  attackValue = [];
        let tabAttackValue =[];
        let attackValue2 = 0;
        
        for (let i=0; i<ordrePJ.length;i++) {
            tabPJ[i] = [ordrePJ[i],ordrePJ[1-i]];
            if (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0) {
                tabAttackValue = this.getAttackValue(tabPJ[i]);
                attackValue[i]=[tabAttackValue[0],tabAttackValue[1],tabAttackValue[2]];
                console.log(attackValue[i][0]);
                this.beforeAttack(tabPJ[i],attackValue[i][2],numAttack);
                //console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" avant combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                if(numAttack!=1 || tabPJ[i][0].typePersonnage.nomType!="Archer") {
                    
                        this.receiveAttack(tabPJ[i],attackValue[i][0]);
                        console.log(tabPJ[i][0].nom + " inflige "+attackValue[i][0]+" points de degats");
                    
                }
                this.afterAttack(tabPJ[i],attackValue[i][0]);
                //console.log(" la sante du personnage "+ordrePJ[i].nom+" de type : "+ordrePJ[i].typePersonnage.nomType+" après combat est de : "+ordrePJ[i].sante+" et la sante du personnage "+ordrePJ[1-i].nom+" de type : "+ordrePJ[1-i].typePersonnage.nomType+" est de : "+ordrePJ[1-i].sante);
                   //console.log("**************************************");
                           //onHit();
            }
            if (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0 && attackValue[i][1] == 2) {
                attackValue2=this.getAttackValueVoleur(tabPJ[i]);
                this.receiveAttack(tabPJ[i],attackValue2);
                console.log(tabPJ[i][0].nom + " attaque une deuxieme fois et inflige "+attackValue2+" points de degats");
            }
        console.log(tabPJ[i][0].nom+ " : vie "+tabPJ[i][0].sante);
        console.log(tabPJ[i][1].nom+ " : vie "+tabPJ[i][1].sante);
        console.log("***************************************************");        
        }
    }

    public fight() {
        let numAttack = 1;
        let ordrePJ=[this._p1,this._p2]
        while (ordrePJ[0].sante > 0 && ordrePJ[1].sante > 0 && numAttack<20) {
            if (this._p1.vitesse<this._p2.vitesse) {
                ordrePJ=[this._p2,this._p1];
            }
            this.oneTurn(ordrePJ,numAttack);
            this.restaureMana(ordrePJ);
            console.log(numAttack);
            numAttack++;
        }
        this.afficheVainqueur(ordrePJ);
    }
    private restaureMana(ordrePJ: Personnage[]){
        let diffMana = 0;
        let manaRestauree = 0;
        for (let i=0;i<ordrePJ.length;i++) {
            if (ordrePJ[i].typePersonnage.nomType=="Magicien") {
                diffMana = ordrePJ[i].manaInitiale-ordrePJ[i].pointsMana;
                manaRestauree = (diffMana>ordrePJ[i].intelligence*0.5 ? ordrePJ[i].intelligence*0.5 : diffMana);
                ordrePJ[i].pointsMana = ordrePJ[i].pointsMana + manaRestauree;
                console.log(ordrePJ[i].nom+" restaure "+manaRestauree+" points de mana");
            }
        }
    }
    private afficheVainqueur(ordrePJ:Personnage[]) {
        for (let i=0;i<ordrePJ.length;i++) {
            if (ordrePJ[i].sante>0) {
                console.log("le vainqueur est : "+ordrePJ[i].nom)
            }
        }
    }

    private beforeAttack(tabPJ:Personnage[],degatsArcher:number, numAttack:number){
        if (tabPJ[1].typePersonnage.nomType=="Archer") {
            if (tabPJ[1].vitesse>=tabPJ[0].vitesse) {
                if (numAttack==1) {
                    tabPJ[0].sante -= 2.5*degatsArcher;
                    console.log(tabPJ[1].nom+ "pose un piege et inflige "+2.5*degatsArcher+" degats à "+tabPJ[0].nom)
                }
            }
        }
    }

    private afterAttack(tabPJ:Personnage[], degats:number){
        const multVolVieViking = 0.15;
        const multVolManaViking = 0.03;
        if (tabPJ[0].typePersonnage.nomType=="Viking") {
            let santeValeur = tabPJ[0].sante + multVolVieViking*degats;
            let diffVie = tabPJ[0].santeInitiale-tabPJ[0].sante;
            let vieVolee = (diffVie>multVolVieViking*degats ? multVolVieViking*degats : diffVie)
            tabPJ[0].sante = tabPJ[0].sante + vieVolee;
            let manaValeur = tabPJ[0].pointsMana + multVolManaViking*degats;
            let diffMana = tabPJ[0].manaInitiale-tabPJ[0].pointsMana;
            let manaVolee = (diffMana>multVolManaViking*degats ? multVolManaViking*degats : diffMana)
            tabPJ[0].pointsMana = tabPJ[0].pointsMana + manaVolee;

            console.log(tabPJ[0].nom+" recupere "+vieVolee+" points de vie et "+manaVolee+" points de mana");
        }
    }
}