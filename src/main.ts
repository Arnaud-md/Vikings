import { Combat } from "./Combats/Combat"
import { Personnage } from "./Personnage/Personnage"
import { Arme } from "./Arme"
import { Viking } from "./TypesPersonnages/Viking"
import { Archer } from "./TypesPersonnages/Archer"
import { Chevalier } from "./TypesPersonnages/Chevalier"
import { Magicien } from "./TypesPersonnages/Magicien"
import { Voleur } from "./TypesPersonnages/Voleur"
import { CombatHandler } from "./Combats/CombatHandler"
import { Hero } from "./Personnage/Hero"
import { Epee } from "./Objets/Epee"
import { Gant } from "./Objets/Gant"
let viking1 = new Viking();

let ragnar = new Hero("Ragnar",viking1);

let archer1 = new Archer();

let tell = new Hero("Tell",archer1);

let chevalier1 = new Chevalier();

let luther = new Hero("Luther",chevalier1);

let voleur1 = new Voleur();

let robin = new Hero("Robin",voleur1);

let magicien1 = new Magicien();

let merlin = new Hero("Merlin",magicien1)

let epee1 = new Epee(1600,1000,4,"Epee de glace",6,6,12);
console.log(ragnar.nom+ " a une force de : "+ragnar.force);
epee1.use(ragnar);
console.log(ragnar.nom+ " a (apres s'etre equipe d'une epee) une force de : "+ragnar.force);

let gant1 = new Gant(800,400,2," gants en maille ",4,2,3,0);
console.log(luther.nom+" a une armure de : "+luther.armure);
gant1.use(luther);
console.log(luther.nom+" a (apres s'etre equipe d'un gant) une armure de : "+luther.armure);
// TODO Prise en compte de l'armure/protection dans le système de combat

let combat = new CombatHandler(ragnar,tell);
let combat2 = new CombatHandler(ragnar,luther);
let combat3 = new CombatHandler(luther,tell);
let combat4 = new CombatHandler(robin,merlin)
let combat5 = new CombatHandler(luther,ragnar);
combat5 .fight();



// const viking2 = new Viking('viking2', 36, 39, 15, new Arme('Lame de sang', 20), 2)

// const combat = new Combat([viking1, viking2])
// combat.simulate()
// combat.afficherVainqueur()