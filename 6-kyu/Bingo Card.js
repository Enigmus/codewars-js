function getCard() {
  let al = ["B", "I", "N", "G", "O"];
  let arr = [];
  const getRand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  const getArr = (letter, min, max, a = []) => {
    let len = letter === "N" ? 4 : 5;
    while (a.length < len) {
      let num = getRand(min, max);
      if (!a.includes(num)) a.push(num);
      else getArr(letter, min, max, a);
    }
    return a.map((e) => letter.concat(e));
  };
  al.forEach((el, ind) => {
    let min = ind * 15 + 1;
    let max = 15 * (ind + 1);

    arr.push(getArr(el, min, max));
  });
  return arr.flat();
}

console.log(getCard());
