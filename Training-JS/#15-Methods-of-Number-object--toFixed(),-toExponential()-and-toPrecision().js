function howManySmaller(arr, n) {
    let k = 0;
    arr.map(function (el) {
        if (el.toFixed(2) < n) k++;
    });

    return k;
}

console.table(howManySmaller([1.234, 1.235, 1.228], 1.24)); //2
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); //1
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); //2

console.log(
    howManySmaller(
        [
            1.45741356, 1.45129668, 1.45013368, 1.45468853, 1.45234378,
            1.45789612, 1.45185077, 1.45927064, 1.45436571, 1.45070043,
            1.4541597, 1.45230578,
        ],
        1.45245
    )
);
