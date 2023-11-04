/**
 *
 * @param {Number} n
 * @returns {Number}
 *
 * @example Input: 42145 Output: 54421
 *          Input: 145263 Output: 654321
 *          Input: 123456789 Output: 987654321
 */
function descendingOrder(n) {
    return Number(
        n
            .toString()
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}
