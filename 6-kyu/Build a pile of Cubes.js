function findNb(m, s = 0, i = 1) {
  s += Math.pow(i, 3);
  if (s > m) return -1;
  if (s < m) return findNb(m, s, ++i);
  return i;
}

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
