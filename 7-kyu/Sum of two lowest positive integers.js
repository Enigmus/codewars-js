/**
 * Создайте функцию, которая возвращает сумму двух наименьших положительных чисел,
 * заданных массивом из минимум 4 положительных целых чисел.
 * Не будут переданы числа с плавающей точкой или неположительные целые числа.
 *
 * @param {Array} numbers
 * @returns Number
 */
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  return arr[0] + arr[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13);
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10);
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);
