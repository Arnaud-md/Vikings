import { Combat } from "./Combats/Combat"
import { Personnage } from "./Personnage"
import { Arme } from "./Arme"
import { Viking } from "./TypesPersonnages/Viking"
import { Archer } from "./TypesPersonnages/Archer"
import { Chevalier } from "./TypesPersonnages/Chevalier"
import { Magicien } from "./TypesPersonnages/Magicien"
import { Voleur } from "./TypesPersonnages/Voleur"
import { CombatHandler } from "./Combats/CombatHandler"
let viking1 = new Viking();

let ragnar = new Personnage("Ragnar",viking1);

let archer1 = new Archer();

let tell = new Personnage("Tell",archer1);

let chevalier1 = new Chevalier();

let luther = new Personnage("Luther",chevalier1);

let voleur1 = new Voleur();

let robin = new Personnage("Robin",voleur1);

let magicien1 = new Magicien();

let merlin = new Personnage("Merlin",magicien1)

let combat = new CombatHandler(ragnar,tell);
let combat2 = new CombatHandler(ragnar,luther);
let combat3 = new CombatHandler(luther,tell);
let combat4 = new CombatHandler(robin,merlin)
let combat5 = new CombatHandler(luther,ragnar);
combat4.fight();

console.log(ragnar.sante);
console.log(luther.sante);


// const viking2 = new Viking('viking2', 36, 39, 15, new Arme('Lame de sang', 20), 2)

// const combat = new Combat([viking1, viking2])
// combat.simulate()
// combat.afficherVainqueur()