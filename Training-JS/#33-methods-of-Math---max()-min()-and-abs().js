function maxMin(arr1, arr2) {
    let arr = arr1.map((el, ind) => Math.abs(el - arr2[ind]));
    return [Math.max(...arr), Math.min(...arr)];
}

console.log(maxMin([1, 3, 5], [9, 8, 7]));
