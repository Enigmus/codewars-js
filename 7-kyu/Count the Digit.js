/**
 * 
 * @param {Number} n 
 * @param {Number} d 
 * @returns {Number} - Количество цифр d содержащихся во всех числах, 
 * полученных в результате возведений в квадрат числе в диапазоне от 0 до n
 */
function nbDig(n, d) {
    let sum = 0;
    for (let k = 0; k <= n; k++) {
        let arr = String(Math.pow(k, 2)).split("");
        arr.forEach((el) => (el == d ? sum++ : sum));
    }
    return sum;
}

console.log(nbDig(5750, 0)); //  4700, "n = 5750, d = 0"
console.log(nbDig(11011, 2)); //  9481, "n = 11011, d = 2"
console.log(nbDig(12224, 8)); //  7733, "n = 12224, d = 8"
console.log(nbDig(11549, 1)); // 11905, "n = 11549, d = 1"
