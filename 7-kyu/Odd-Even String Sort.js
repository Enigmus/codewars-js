function sortMyString(S) {
    let even = ''
    let odd = ''
    for (let i = 0; i < S.length; i++){
        if(!(i%2)) even+=S[i] 
        else odd+=S[i]
    }
    return even + " " + odd
}

console.log(sortMyString("CodeWars")); //"CdWr oeas"
console.log(sortMyString("YCOLUE'VREER")); //"YOU'RE CLEVER"
