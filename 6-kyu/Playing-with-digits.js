/**
 * @author SD "https://github.com/Enigmus"
 * @file Задача из 6 kyu
 * Даны положительное целое число n, записанное в виде abcd... (a, b, c, d... являются цифрами),
 * и положительное целое число p. Мы хотим найти положительное целое число k, если оно существует,
 * такое, что сумма цифр n, взятых в последовательных степенях p, равна k * n.
 * Другими словами:
 * Существует ли целое число k, такое как: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k
 * Если это так, мы вернем k, если нет, вернем -1.
 * Примечание : n и p всегда задаются как строго положительные целые числа.
 */

/** *
 * @param {number} n - исходное число
 * @param {number} p - положительное целое число. Число, с которого начинается степень
 * @returns {number}
 */
function digPow(n, p) {
    n = n.toString(); //Приводим число к строке
    let sum = 0,
        k = 0;

    for (let i = 0; i < n.length; i++) {
        //(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
        sum += Number(n[i]) ** p;
        p++;
    }

    k = sum / Number(n); //находим число к

    return Number.isInteger(k) ? k : -1; // если "к" положительное целое, вернем "к", иначе -1
}

//(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
