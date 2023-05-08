const shuffleIt = (arr, ...b) => {
    for (let i = 0; i < b.length; i++) {
        [arr[b[i][0]], arr[b[i][1]]] = [arr[b[i][1]], arr[b[i][0]]];
    }
    return arr;
}

console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])); // 1 3 5 2 4
