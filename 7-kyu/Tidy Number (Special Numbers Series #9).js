function tidyNumber(n) {
  let arr = [...n.toString()].map((el) => +el);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(tidyNumber(12)); //true
console.log(tidyNumber(102)); //false
console.log(tidyNumber(9672)); //false
console.log(tidyNumber(2789)); //true
console.log(tidyNumber(2335)); //true
