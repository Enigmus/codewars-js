/**
 * Напишите функцию, которая будет принимать любое число arrayи обращать его.
 * Звучит просто, не правда ли?
 *
 * ПРИМЕЧАНИЯ:
 * Массив должен быть перевернут на месте! (возвращать его не нужно)
 * Обычные встроенные функции деактивированы. Не рассчитывайте на них.
 * Вам придется сделать это достаточно быстро, поэтому подумайте о выступлениях.
 *
 * @param {Array} arr
 */
function reverse(arr) {
  let l = arr.length - 1;
  for (let i = 0; i < l / 2; i++) {
    let a = arr[i];
    arr[i] = arr[l - i];
    arr[l - i] = a;
  }
}

let arr = ["hello", "world", "how", "are", "you", "?"];
reverse(arr);
console.log(arr);
//return arr.reduceRight((acc, el) => acc.concat(el), []);
