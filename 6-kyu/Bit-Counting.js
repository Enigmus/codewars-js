/**Напишите функцию, которая принимает на вход целое число 
 * и возвращает количество битов, равных единице 
 * в двоичном представлении этого числа. */
var countBits = function (n) {
    return n
        .toString(2)    //переводим в двоичное
        .split("")      //разбиваем полученную строку посимвольно в массив
        .reduce((acc, el) => (acc += +el), 0);  //складываем все значения
};

console.log(countBits(0)); //0
console.log(countBits(4)); //1
console.log(countBits(7)); //3
console.log(countBits(9)); //2
console.log(countBits(10)); //2
