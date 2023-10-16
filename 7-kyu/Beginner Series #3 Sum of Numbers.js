function getSum(a, b) {
    if (a > b) [a, b] = [b, a];
    for (let i = a + 1; i <= b; i++) a += i;
    return a;
}

console.log(getSum(0, -1)); //-1
console.log(getSum(0, 1)); // 1
console.log(getSum(2, 2)); // 2
