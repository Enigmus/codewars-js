/**
 * Завершите решение так, чтобы оно разделило строку на пары из двух символов.
 * Если строка содержит нечетное количество символов, то следует заменить
 *  отсутствующий второй символ последней пары подчеркиванием ('_').
 *
 * @param {String} str
 * @returns Array
 */
const solution = (str) =>
  (str.length % 2 === 0 ? str : str + "_").match(/.{2}/g) || [];

console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), []);
