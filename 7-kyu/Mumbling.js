const accum = (s) =>
  Array.from(s.toUpperCase())
    .map((el, i) => el.padEnd(i + 1, el.toLowerCase()))
    .join("-");

console.log(accum("ZpglnRxqenU"));
