/**
 * @author SD "https://github.com/Enigmus"
 * @file Задание 7 kyu
 * В этом небольшом задании вам дается строка чисел, разделенных пробелами, 
 * и вы должны вернуть наибольшее и наименьшее число.
 */

/**
 * Фунцкия возврата максимального и минимального числе в исходной строке
 * @param {string} numbers исходная строка чисела, разделенная пробелами
 * @returns {string} вернем строку, первое число - максимально, второе - минимальное
 */
function highAndLow(numbers){
    let arr = numbers.split(' ');
    arr.sort(function(a,b){ 
        return a - b;
      });
    
    return `${arr[arr.length - 1]} ${arr[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));  // return "42 -9"