/**
 * 
 * @param {String} x 
 * @returns {Boolean}
 * 
 * @example isPalindrome("Abba") => true
            isPalindrome("hello")=> false
 */
const isPalindrome = (x) =>
    x.toLowerCase() === x.toLowerCase().split("").reverse().join("")
        ? true
        : false;
