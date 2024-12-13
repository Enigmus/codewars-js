/**
 * Are they the "same"?
 *
 * Дано два массива aи bнапишите функцию comp(a, b)(или compSame(a, b)), которая проверяет,
 * содержат ли два массива «одинаковые» элементы с одинаковой кратностью
 * (кратность элемента — это количество раз, которое он встречается).
 * «Одинаковые» здесь означает, что элементы в bявляются квадратами элементов в a, независимо от порядка.
 *
 * @param {Array || null} array1
 * @param {Array || null} array2
 * @returns {Boolean}
 */
function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;
  return (
    array1.sort((a, b) => a - b).toString() ===
    array2
      .sort((a, b) => a - b)
      .map((el) => Math.sqrt(el))
      .toString()
  );
}

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));
