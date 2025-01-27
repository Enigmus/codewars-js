function isPangram(string) {
  let alp = Array.from("abcdefghijklmnopqrstuvwxyz");
  let a = string.toLowerCase().split("");
  return alp.every((el) => a.includes(el));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."), true);
