function automorphic(n) {
  const q = n ** 2;

  return q.toString().lastIndexOf(n) ===
    q.toString().length - n.toString().length
    ? "Automorphic"
    : "Not!!";
}

console.log(automorphic(1)); //"Automorphic"
console.log(automorphic(3)); //"Not!!"
console.log(automorphic(6)); //"Automorphic"
console.log(automorphic(9)); //"Not!!"
console.log(automorphic(25)); //"Automorphic"
console.log(automorphic(53)); //"Not!!"
console.log(automorphic(76)); //"Automorphic"
console.log(automorphic(95)); //"Not!!"
console.log(automorphic(625)); //"Automorphic"
console.log(automorphic(225)); //"Not!!"
