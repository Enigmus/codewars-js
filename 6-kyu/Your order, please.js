/**
 * Ваша задача — отсортировать заданную строку.
 * Каждое слово в строке будет содержать одно число.
 * Это число — позиция, которую слово должно занимать в результате.
 *
 * @param {String} words
 * @returns String
 */
function order(words) {
  let out = [];
  for (let i = 1; i <= 9; i++) {
    words.split(" ").forEach((el) => {
      if (el.includes(i)) {
        out.push(el);
      }
    });
  }

  return out.join(" ");
}

console.log(
  order("4of Fo1r pe6ople g3ood th5e the2"),
  "\nFo1r the2 g3ood 4of th5e pe6ople"
);
