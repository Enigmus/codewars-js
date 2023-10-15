/**Изограмма – это слово, в котором нет повторяющихся букв,
 * как последовательных, так и непоследовательных.
 * Реализуйте функцию, которая определяет, является ли строка,
 * содержащая только буквы, изограммой.
 * Предположим, что пустая строка является изограммой.
 * Не обращайте внимания на регистр букв. */

function isIsogram(str) {
    if (!str) return true;
    str = str.toLowerCase();
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            return false;
        } else arr.push(str[i]);
        //console.log(arr)
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("isogram")); //true
console.log(isIsogram("aba")); //false, "same chars may not be adjacent"
console.log(isIsogram("moOse")); //false, "same chars may not be same case"
console.log(isIsogram("isIsogram")); //false
console.log(isIsogram("")); //true, "an empty string is a valid isogram"
