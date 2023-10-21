/**
 * 
 * @param {Array} arr 
 * @returns {Number} minSum({5,4,2,3}) ==> return (22) 
 * 
 * @example  5*2 + 3*4 = 22
 */
function minSum(arr) {
    let sum = 0;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++)
        sum += arr[i] * arr[arr.length - 1 - i];

    return sum;
}

console.log(minSum([5, 4, 2, 3])); //22
console.log(minSum([12, 6, 10, 26, 3, 24])); //342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); //74
