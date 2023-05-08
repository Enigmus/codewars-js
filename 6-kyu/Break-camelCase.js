/**
 * @author SD 'https://github.com/Enigmus'
 * @file Задание на 6 kyu
 * Завершите решение, чтобы функция разбивала верблюжий регистр,
 * используя пробелы между словами.
 */

/**
 *
 * @param {string} string Строка в camelCase
 * @returns {string} строка с пробелами camel Case
 * 
 */
function solution(string) {
    return string.replace(/([A-Z])\B/g, (x) => " " + x);
}

console.log(solution("camelCasingTest"));
