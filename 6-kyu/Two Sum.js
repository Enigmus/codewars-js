/**
 * Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число.
 * Она должна найти два разных элемента в массиве, которые при сложении дают целевое значение.
 * Индексы этих элементов затем должны быть возвращены в массиве
 *
 * @param {Array} numbers
 * @param {Numbers} target
 * @returns {Array}
 */
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5], 8));
