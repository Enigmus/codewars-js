function numPrimorial(n) {
  const nums = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
  ];
  return nums.slice(0, n).reduce((acc, el) => acc * el, 1);
}

console.log(numPrimorial(3)); //30);
console.log(numPrimorial(4)); //210);
console.log(numPrimorial(5)); //2310);
console.log(numPrimorial(8)); //9699690);
console.log(numPrimorial(9)); //223092870);
