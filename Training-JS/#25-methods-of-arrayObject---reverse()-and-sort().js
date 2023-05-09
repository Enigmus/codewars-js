function sortIt(arr) {
    return [...arr].sort((a, b) => {
        let countA = arr.filter((v) => v === a).length;
        let countB = arr.filter((v) => v === b).length;
        if (countA === countB) return b - a;
        if (countA > countB) return 1;
        return -1;
    });
}

console.log(sortIt([1, 9, 2, 7, 7, 7, 7, 3, 4, 4, 5, 5, 6, 6])); // [3,2,1,6,6,5,5,4,4]
