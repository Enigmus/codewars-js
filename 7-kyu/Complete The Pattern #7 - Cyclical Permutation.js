function pattern(n) {
  if (n < 1) return "";
  return Array.from({ length: n })
    .map((el, i) => {
      let t = Array.from({ length: n }, (_, i) => i + 1);
      let slice = t.slice(0, i);
      return (i === 0 ? "" : "\n") + t.toSpliced(0, i).concat(slice).join("");
    })
    .join("");
}

console.log(pattern(7));
