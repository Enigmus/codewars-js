/**
 * @author SD "https://github.com/Enigmus"
 * @file Задача из 6 kyu
 * Ваша задача — реализовать функцию, которая возвращает последние D цифры целого числа N в виде списка.
 */

/**
 *
 * @param {number} n Исходное число
 * @param {number} d количество цифр числа D
 * @returns {Array} массив цифр
 */
function lastDigit(n, d) {
    if (d <= 0) return []; //Если d отрицательное, либо равно нулю, вернем пустой массив
    // Приводим число к строке, возвращаем последнее D-количество символов, 
    //разибваем строку на массив, и приводим каждый элемент массива к числу
    return n.toString().slice(-d).split("").map(Number);
}

console.log(lastDigit(123767, -4));
console.log(lastDigit(0, 1));
console.log(lastDigit(123, 5));
