function persistence(num, col = 0) {
  if (num < 10) return col;
  num = [...num.toString()].reduce((acc, el) => (acc *= Number(el)), 1);
  return persistence(num, (col += 1));
}

console.log(persistence(999), 4);
