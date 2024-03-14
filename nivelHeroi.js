// Save Hero name
let heroName = "Joaozinho"

// Save the Hero experience 
let heroXP = 9500

// Declare variable to classify according to experience
let xpName

// Conditions and classification

if (heroXP <= 1000){
    xpName = "Ferro"
} else if (heroXP > 1000 && heroXP <= 2000){
    xpName = "Bronze"
} else if (heroXP > 2000 && heroXP <= 5000){
    xpName = "Prata"
}else if (heroXP > 5000 && heroXP <= 7000){
    xpName = "Ouro"
}else if (heroXP > 7000 && heroXP <= 8000){
    xpName = "Platina"
}else if (heroXP > 8000 && heroXP <= 9000){
    xpName = "Ascendente"
}else if (heroXP > 9000 && heroXP <= 10000){
    xpName = "Imortal"
} else{
    xpName = "Radiante"
}

// Print the hero name and class
console.log(`O Herói de nome ${heroName} está no nível de ${xpName}`)