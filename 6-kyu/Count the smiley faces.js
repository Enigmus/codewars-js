//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((acc, el) => {
    if (el.match(/[;:]{1}[-~]{0,1}[)D]{1}/g)) acc++;
    return acc;
  }, 0);
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);

console.log(";)".match(/[;:]{1}[-~]{0,1}[)D]{1}/g));
