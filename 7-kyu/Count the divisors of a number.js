function getDivisorsCnt(n) {
    let num = n;
    let count = 1;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            let pow = 1;
            let ipow = i;

            for (let ipowNext = i * i; num % ipowNext === 0; ipowNext *= i) {
                pow++;
                ipow = ipowNext;
            }

            count *= pow + 1;
            num = num / ipow;
        }
    }

    return count;
}

console.log(getDivisorsCnt(1)); // 1
console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8
