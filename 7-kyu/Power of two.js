function isPowerOfTwo(n){
    if(n > 0){
    if( n % 2 ) return false; else true
    return isPowerOfTwo(n / 2)
    }
  }

console.log(isPowerOfTwo(2));   //true
console.log(isPowerOfTwo(4096));    //true
console.log(isPowerOfTwo(5));   //false