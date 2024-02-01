function productArray(numbers) {
  const a = numbers.reduce((acc, el) => acc * el, 1);
  return numbers.map((el) => a / el);
}

console.log(productArray([3, 27, 4, 2])); //[216,24,162,324]
