function adjacentElementsProduct(array) {
  let arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    arr.push(array[i] * array[i + 1]);
  }
  return Math.max(...arr);
}

console.log(adjacentElementsProduct([5, 8])); //40
console.log(adjacentElementsProduct([1, 2, 3])); //6
console.log(adjacentElementsProduct([1, 5, 10, 9])); //90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])); //48
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4])); //6
