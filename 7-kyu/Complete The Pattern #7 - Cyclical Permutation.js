function pattern(n) {
  if (n < 1) return "";
  let temp = Array.from({ length: n });
  return temp
    .map((el, i) => {
      let t = Array.from({ length: n }, (_, i) => i + 1);
      let slice = t.slice(0, i);
      t.splice(0, i);
      return (i === 0 ? "" : "\n") + t.concat(slice).join("");
    })
    .join("");
}

console.log(pattern(7));
