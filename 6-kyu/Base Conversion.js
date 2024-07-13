var Alphabet = {
  BINARY: "01",
  OCTAL: "01234567",
  DECIMAL: "0123456789",
  HEXA_DECIMAL: "0123456789abcdef",
  ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
  ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA_NUMERIC:
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
};
var bin = Alphabet.BINARY,
  oct = Alphabet.OCTAL,
  dec = Alphabet.DECIMAL,
  hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER,
  alup = Alphabet.ALPHA_UPPER,
  alpha = Alphabet.ALPHA,
  alnum = Alphabet.ALPHA_NUMERIC;

function convert(input, source, target) {
  const code = (input) => {
    if (Number(input) < target.length) return target[input];
    else
      return (
        code(Math.floor(Number(input) / target.length)) +
        code(Number(input) % target.length)
      );
  };
  const decode = (input) => {
    return input
      .split("")
      .reverse()
      .map((el, ind) => source.indexOf(el) * Math.pow(source.length, ind))
      .reduce((acc, el) => acc + el);
  };
  return code(decode(input));
}

console.log(convert("15", dec, bin)); //'1111', '"15" dec -> bin'
console.log(convert("15", dec, oct)); //'17', '"15" dec -> oct'
console.log(convert("1010", bin, dec)); //'10', '"1010" bin -> dec'
console.log(convert("1010", bin, hex)); //'a', '"1010" bin -> hex'

console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)); // should return "a"
console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER)); // should return "bb"
console.log(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)); // should return "320048"
console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER));
