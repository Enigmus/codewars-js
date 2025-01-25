/**
 * Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9)
 * и возвращает строку этих чисел в виде номера телефона.
 *
 * @param {Array} numbers
 * @returns String
 */
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/g, `($1) $2-$3`);
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  "(111) 111-1111"
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  "(123) 456-7890"
);
