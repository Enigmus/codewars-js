/**
 * Given a string of words, you need to find the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 * For example, the score of abad is 8 (1 + 2 + 1 + 4).
 * You need to return the highest scoring word as a string.
 *
 * @param {String} x
 * @returns String
 */
function high(x) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let out = {
    el: 1,
    mas: 1,
  };

  x.split(" ").forEach((el) => {
    let mas = el
      .split("")
      .reduce((acc, e) => (acc += alphabet.indexOf(e) + 1), 0);
    if (mas > out.mas) {
      out = { el, mas };
    }
  });

  return out.el;
}

console.log(high("man i need a taxi up to ubud"), "\ntaxi");
