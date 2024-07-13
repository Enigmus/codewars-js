function jumpingNumber(n) {
  if (n < 10) return "Jumping!!";

  let sub = [...n.toString()].map((el) => +el);
  for (let i = 1; i < sub.length; i++) {
    if (Math.abs(sub[i] - sub[i - 1]) !== 1) return "Not!!";
  }
  return "Jumping!!";
}

console.log(jumpingNumber(987389876)); // "Jumping!!"
