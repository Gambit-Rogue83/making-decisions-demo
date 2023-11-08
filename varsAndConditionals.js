/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Iron Man and
    Captain America.
*/
//Attacks defined
let ironManAttack = 25
let captainAmericaAttack = 35


if (ironManAttack > captainAmericaAttack) {
    console.log('Iron Man has a higher attack than Captain America')
} else if (captainAmericaAttack > ironManAttack) {
    console.log('Captain America has a higher attack than Iron Man')
} else {
    console.log('It appears they are evenly matched')
}
// Iron man stats
let ironManHealth = 100
let ironManDefense = 0
// captain America throws the shield into Iron Man's back
if (ironManHealth <= captainAmericaAttack) {
    console.log('Iron Man has fainted')
} else {
    ironManHealth -= captainAmericaAttack
    console.log(`Iron Man has ${ironManHealth} health points remaining`)
}
// Iron Man increases combat defense
ironManDefense += 30
// captain america swings his shield at Iron Man's chest
if (ironManHealth <= captainAmericaAttack - ironManDefense) {
    console.log('Iron Man has fainted')
} else {
    ironManHealth -= (captainAmericaAttack - ironManDefense)
    console.log(`Iron Man has ${ironManHealth} health points remaining`)
}
// Iron Man switches out damaged pieces of his armor
if (ironManHealth + 50 >= 100) {
    ironManHealth = 100
} else {
    ironManHealth += 50
}

// If this hurts Iron Man he will continue fighting, or he will desist
let shieldBash = true

if (shieldBash !== false) {
    console.log('I can do this all day')
} else {
    console.log('Tony, I dont want to fight')
}

for (let i = 0; i < 5; i++) {
    if (ironManHealth <= captainAmericaAttack - ironManDefense) {
        console.log('Iron Man has fainted')
    } else {
        ironManHealth -= (captainAmericaAttack - ironManDefense)
        console.log(`Iron Man has ${ironManHealth} health points remaining`)
}
}

// while(ironManHealth > 0) {
//     ironManHealth -= (captainAmericaAttack - ironManDefense)
//     console.log(`Iron Man is down to ${ironManHealth} health points remaining.`)
//     if(ironManHealth <= 0) {
//         console.log(`Iron Man has surrendered. The battle is over`)
//     }
// }
