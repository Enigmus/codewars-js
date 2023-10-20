/**
 * 
 * @param {Number} n Дробное число 
 * @returns {Number} Возвращает положительнуб дробную часть
 * @example -10.2 => 0.2
 */
function getDecimal(n) {
    return Math.abs(n - Math.trunc(n)); // fix me
}
