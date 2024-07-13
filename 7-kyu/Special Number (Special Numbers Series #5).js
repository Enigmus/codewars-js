function specialNumber(n) {
  const r = [0, 1, 2, 3, 4, 5];
  const arr = [...n.toString()].map((el) => +el);

  for (let i = 0; i < arr.length; i++) {
    if (!r.includes(arr[i])) return "NOT!!";
  }

  return "Special!!";
}

console.log(specialNumber(2)); //"Special!!"
console.log(specialNumber(3)); //"Special!!"
console.log(specialNumber(6)); //"NOT!!"
console.log(specialNumber(9)); //"NOT!!"
console.log(specialNumber(11)); //"Special!!"
console.log(specialNumber(55)); //"Special!!"
console.log(specialNumber(26)); //"NOT!!"
console.log(specialNumber(92)); //"NOT!!"
console.log(specialNumber(25432)); //"Special!!"
console.log(specialNumber(2783)); //"NOT!!"
