function maxGap(numbers) {
  let arr = numbers.sort((a, b) => b - a);
  let out = 0;
  for (let i = 1; i < arr.length; i++) {
    let res = arr[i - 1] - arr[i];
    if (res > out) out = res;
  }
  return out;
}

console.log(maxGap([13, 10, 2, 9, 5])); //4
