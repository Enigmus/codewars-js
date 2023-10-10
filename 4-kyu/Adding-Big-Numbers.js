
/* Кодвар не поддерживает фунцкию BigInt
    Ищем решение дальше....
function add(a, b) {
    return (BigInt(a) + BigInt(b)).toString(); // Fix me!
}*/

console.log(add("1", "1"));
console.log(add("123", "456"));
console.log(add("888", "222"));
console.log(add("1372", "69"));
console.log(add("12", "456"));
console.log(add("101", "100"));
console.log(add("63829983432984289347", "1"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
