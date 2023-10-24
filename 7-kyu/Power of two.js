function isPowerOfTwo(n) {
  return n != 0 && (n & (n - 1)) == 0 ? true : false;
}

console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(4096)); //true
console.log(isPowerOfTwo(5)); //false
