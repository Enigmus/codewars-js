/**
 * @author SD "https://github.com/Enigmus"
 * @file Задание 6 kyu
 * Цифровой корень — это рекурсивная сумма всех цифр числа.
 * Учитывая n, возьмите сумму цифр n. 
 * Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, 
 * пока не будет получено однозначное число. Ввод будет неотрицательным целым числом.
 */

/** Функция рекурсивного сложение цифр числа.
 * @param {number} n Исходное число 
 * @returns {number} Вернет цифру, к которой привели исходное число
 */
function digitalRoot(n) {
    let result = (n < 10) ? n : 0;   
    while (n >= 10) {
        result += n % 10;
        n = (n - (n % 10)) / 10;
        if (n < 10) 
            result += n;
    }
    if(result > 9) return digitalRoot(result);
    
    return result;
}

console.log(digitalRoot(123456789));
