/**
 * !!!! y - для этой ката это не гласная буква
 */

function vowelOne(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let s = "";
    for (let i = 0; i < str.length; i++)
        s += vowels.includes(str[i].toLowerCase()) ? 1 : 0;
    return s;
}

console.log(vowelOne("vowelOne")); //"01010101"
console.log(vowelOne("123, arou")); //"000001011"
