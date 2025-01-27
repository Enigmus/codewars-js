const narcissistic = (value) =>
  Array.from(String(value)).reduce(
    (acc, el, i, arr) => (acc += Math.pow(Number(el), arr.length)),
    0
  ) === value
    ? true
    : false;

console.log(narcissistic(7), true);
console.log(narcissistic(153), true);
