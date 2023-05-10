/**
 * @author SD 'https://github.com/Enigmus'
 * @file Задача из 5 kyu
 * Функция преобразования rgb в HEX.
 * Допустимые десятичные значения для RGB: 0–255.
 * Любые значения, выпадающие из этого диапазона,
 * должны быть округлены до ближайшего допустимого значения.
 * Примечание. Ваш ответ всегда должен состоять из 6 символов, сокращение с 3 здесь не сработает.
 */
/**
 * 
 * @param {number} r целое число
 * @param {number} g целое число 
 * @param {number} b целое число
 * @returns {string} Строка шестнадцатиричное предствление rgb
 */
function rgb(r, g, b) {
    let hex = "";
    for (value of arguments) {
        value = value < 0 ? (value = 0) : value > 255 ? (value = 255) : value;
        hex += value < 16 ? "0" + value.toString(16) : value.toString(16);
    }
    return hex.toUpperCase();
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255, 47)); // 'ADFF2F'
