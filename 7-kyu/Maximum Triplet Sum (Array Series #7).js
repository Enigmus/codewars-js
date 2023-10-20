/**
 * 
 * @param {Array} numbers.length >= 3 
 * @returns {Number} сумма трех наибольших значений
 */
function maxTriSum(numbers) {
    let arr = Array.from(new Set(numbers.sort((a, b) => b - a)));
    return arr[0] + arr[1] + arr[2]
}
