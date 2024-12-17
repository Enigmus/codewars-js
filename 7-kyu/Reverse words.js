function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => [...el].reverse().join(""))
    .join(" ");
}

console.log(
  reverseWords("The quick brown fox jumps over the lazy dog."),
  "\nehT kciuq nworb xof spmuj revo eht yzal .god"
);
