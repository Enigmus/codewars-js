function add(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    let sum = "";

    str1.length > str2.length
        ? (str2 = str2.padStart(str1.length, "0"))
        : (str1 = str1.padStart(str2.length, "0"));

    for (let i = 0; i < str1.length; i++) {
        sum += Number(str1[i]) + Number(str2[i]);
    }

    return Number(sum);
}

console.log(add(16, 18)); //214);
console.log(add(26, 39)); //515);
console.log(add(122, 81)); //1103);
