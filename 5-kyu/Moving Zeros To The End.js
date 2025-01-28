function moveZeros(arr) {
  let a = arr.filter((el) => el !== 0);
  let zero = arr.filter((el) => el === 0);

  return a.concat(zero);
}

console.log(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);
