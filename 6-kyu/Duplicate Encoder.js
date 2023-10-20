/**
 * 
 * @param {String} word Исходная строка
 * @returns {String}  модифицированная строка, смотри пример
 * 
 * @example "din"      =>  "((("
            "recede"   =>  "()()()"
            "Success"  =>  ")())())"
 */
function duplicateEncode(word) {
    let letters = {};
    let arr = word.split("").map((el) => el.toLowerCase());
    for (let i = 0; i < arr.length; i++) {
        if (letters.hasOwnProperty(arr[i])) {
            letters[arr[i]]++;
        } else {
            letters[arr[i]] = 1;
        }
    }

    return arr.map((el) => (letters[el] == 1 ? "(" : ")")).join("");
}

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())","should ignore case"
console.log(duplicateEncode("(( @")); //"))(("
