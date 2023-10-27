/**
 * 
 * @param {Array} data 
 * @returns {Array} Реверс каждые 8 элементов массива
 */
function dataReverse(data) {
    let arr = [];
    while (data.length) {
        arr = arr.concat(data.splice(data.length - 8, 8));
    }
    return arr;
}

console.log(
    dataReverse([
        1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        1, 0, 1, 0, 1, 0, 1, 0,
    ])
);
