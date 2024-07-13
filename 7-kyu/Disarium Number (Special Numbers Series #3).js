function disariumNumber(n) {
  const arr = [...n.toString()]
    .map((el) => +el)
    .reduce((acc, el, i) => acc + Math.pow(el, i + 1), 0);
  return arr === n ? "Disarium !!" : "Not !!";
}

console.log(disariumNumber(89)); //"Disarium !!"
console.log(disariumNumber(564)); //"Not !!"
console.log(disariumNumber(1024)); //"Not !!"
console.log(disariumNumber(135)); //"Disarium !!"
console.log(disariumNumber(136586)); //"Not !!"
