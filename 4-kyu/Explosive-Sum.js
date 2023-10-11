/* Скорость медленная, решение ни проходит на КодВарс :( */
function sum(num) {
    let count = 0;

    function partition(num, limit) {
        if (num > 0) {
            let k = Math.min(num, limit);
            for (let i = k; i > 0; i--) {
                partition(num - i, i);
            }
        } else {
            count++;
        }
        return count;
    }

    return partition(num, num);
}

console.log(sum(1)); //1
console.log(sum(2)); //2
console.log(sum(3)); //3
console.log(sum(4)); //5
console.log(sum(5)); //7
console.log(sum(10)); //42
