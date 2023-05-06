/**
 *   @author SD "https://github.com/Enigmus"
 *   @file Задание из 5 kyu
 *   Переместите первую букву каждого слова в конец,
 *   затем добавьте «ay» в конец слова.
 *   Оставьте знаки препинания нетронутыми.
 */

/**
 * @param {string} str - исходная строка
 * @returns {string} -  Возвращаем  изменненную строку, где первый символ
 *                      каждого слова перенесен в конец слова, + добавленые символы 'ay'
 */
function pigIt(str) {
    let arrFromStr = str.split(" "); //Разбиваем строку на массив слов
    const newArr = arrFromStr.map((el) => {
        if (el.length === 1 && /[.,\/#!?$%\^&\*;:{}=\-_`~()]/g.test(el))
            //если элемент массива знак препинания, возвращем его без изменений
            return el;
        let arr = el.split(""); //разбиваем слово на буквы
        let letter = arr.shift(); //отрезаем первую букву
        arr.push(letter, "ay"); //доваляем первую букву в конец слова, + два дополнительных символа
        return (el = arr.join("")); //возвращаем склеенное слово
    });
    return newArr.join(" "); //возвращаем склеенное предложение
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
