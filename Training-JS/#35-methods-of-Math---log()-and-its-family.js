function thinkingAndTesting(number, base) {
    let i = 1;

    while (number >= Math.pow(base, i)) {
        i++;
    }

    return number - Math.pow(base, i - 1);
}

console.log(thinkingAndTesting(1, 2)); // 0
console.log(thinkingAndTesting(2, 2)); // 0
console.log(thinkingAndTesting(3, 2)); // 1
console.log(thinkingAndTesting(4, 2)); // 0
console.log(thinkingAndTesting(5, 2)); // 1
console.log(thinkingAndTesting(6, 2)); // 2
console.log(thinkingAndTesting(10, 2)); //  2
console.log(thinkingAndTesting(100, 2)); // 36
console.log(thinkingAndTesting(1000, 2)); // 488
console.log(thinkingAndTesting(111, 10)); // 11
console.log(thinkingAndTesting(222, 10)); // 122
console.log(thinkingAndTesting(333, 10)); // 233
console.log(thinkingAndTesting(1111, 10)); // 111
