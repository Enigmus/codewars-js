function minimumNumber(numbers) {
  let sum = numbers.reduce((acc, el) => acc + el, 0);

  let nSum = sum;
  while (!simple(nSum)) {
    nSum++;
  }
  return nSum - sum;
}

function simple(x) {
  var i = 3;
  if (x == 1) return false;
  if (x == 2) return true;
  if (x % 2 == 0) return false;
  while (i * i <= x) {
    if (x % i == 0) return false;
    else i++;
  }
  return true;
}

console.log(minimumNumber([3, 1, 2])); //1
console.log(minimumNumber([5, 2])); //0
console.log(minimumNumber([1, 1, 1])); //0
console.log(minimumNumber([2, 12, 8, 4, 6])); //5
console.log(minimumNumber([50, 39, 49, 6, 17, 28])); //2
