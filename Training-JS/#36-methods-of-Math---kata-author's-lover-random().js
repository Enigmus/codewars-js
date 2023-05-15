function rndCode() {
    const letters = "ABCDEFGHIJKLM".split("");
    const sym = "~!@#$%^&*".split("");

    return letters[getRandomInt(letters.length)] +
           letters[getRandomInt(letters.length)] +
           getRandomInt(9) + 
           getRandomInt(9) + 
           getRandomInt(9) + 
           getRandomInt(9) + 
           sym[getRandomInt(sym.length)] +
           sym[getRandomInt(sym.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

console.log(rndCode());
