function lastDigit(n, d) {
    if (d <= 0) 
        return [];

    return n.toString().slice(-d).split('').map(el => Number(el));
}

console.log(lastDigit(123767, -4));
console.log(lastDigit(0, 1));
console.log(lastDigit(123, 5));