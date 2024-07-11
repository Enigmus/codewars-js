function balancedNum(number) {
  let arr = [...number.toString()].map((el) => +el);
  let len = arr.length;
  let left = [];
  let right = [];

  if (len % 2 === 0) {
    left = arr.slice(0, len / 2 - 1);
    right = arr.slice(len / 2 + 1);
  } else {
    left = arr.slice(0, (len - 1) / 2);
    right = arr.slice((len - 1) / 2 + 1);
  }

  let lSum = left.reduce((acc, el) => acc + el, 0);
  let rSum = right.reduce((acc, el) => acc + el, 0);
  if (lSum === rSum) return "Balanced";

  return "Not Balanced";
}

console.log(balancedNum(7)); // "Balanced"
console.log(balancedNum(959)); // "Balanced"
console.log(balancedNum(13)); // "Balanced"
console.log(balancedNum(432)); // "Not Balanced"
console.log(balancedNum(42324)); // "Balanced"
