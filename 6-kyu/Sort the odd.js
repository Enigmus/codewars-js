/**
 * Вам будет дан массив чисел. Вам нужно отсортировать нечетные числа в порядке возрастания,
 * оставив четные числа на своих исходных позициях.
 *
 * @param {Array} arr
 * @returns ARRAY
 */
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min;
    if (arr[i] % 2 !== 0) {
      min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j] && arr[j] % 2 !== 0) {
          min = j;
        }
      }
    } else continue;
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
console.log(sortArray([5, 3, 7, 9, 1, 11]), [1, 3, 5, 7, 9, 11]);
