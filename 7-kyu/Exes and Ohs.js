function XO(str) {
   let x = 0,
       o = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() == 'x') x++
        else if(str[i].toLowerCase() == 'o') o++
    }
    if(x === 0 && o=== 0) return true
    if(x === o) return true
    return false;
}


console.log(XO('xo')); //true
console.log(XO("xxOo")); //true
console.log(XO("xxxm")); //false
console.log(XO("Oo")); //false
console.log(XO("ooom")); //false

console.log(XO("zpzpzpp")); //true