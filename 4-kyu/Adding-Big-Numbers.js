/* Кодвар не поддерживает фунцкию BigInt
    Ищем решение дальше....
function add(a, b) {
    return (BigInt(a) + BigInt(b)).toString(); // Fix me!
}*/

function add(a, b) {
    let sum = [];
    let z = "0";
    let lenA = a.length;
    let lenB = b.length;
    let bigLen = lenA > lenB ? lenA : lenB;
    a = a.padStart(bigLen, "0").split("");
    b = b.padStart(bigLen, "0").split("");

    for (let i = bigLen - 1; i >= 0; i--) {
        let x = Number(a[i]) + Number(b[i]) + Number(z);
        if (x < 10) {
            sum.unshift(x);
            z = 0;
        } else {
            z = 1;
            sum.unshift(x % 10);
        }
    }
    if(z) sum.unshift(z)
    return sum.join("");
}
add("109", "1");

console.log(add("109", "1"));

console.log(add("123", "456"));
console.log(add("888", "222"));
console.log(add("1372", "69"));
console.log(add("12", "456"));
console.log(add("101", "100"));
console.log(add("63829983432984289347", "1"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
