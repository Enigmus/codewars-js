function minimumSteps(numbers, value) {
  let sum = 0;
  let arr = numbers.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (value <= sum) return i;
  }
}

console.log(minimumSteps([4, 6, 3], 7)); // 1
console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3 */
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
console.log(minimumSteps([4, 6, 3], 2)); // 0
