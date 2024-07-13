function strong(n) {
  return [...n.toString()]
    .map((el) => +el)
    .reduce((acc, el) => {
      let x = 1;
      while (el > 0) {
        x *= el;
        el--;
      }
      return acc + x;
    }, 0) === n
    ? "STRONG!!!!"
    : "Not Strong !!";
}

console.log(strong(145)); // "STRONG!!!!"
