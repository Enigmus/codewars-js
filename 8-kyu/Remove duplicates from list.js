/**
 * 
 * @param {Array} a 
 * @returns {Array}
 * 
 * @example [1, 1, 2] -> [1, 2]
            [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
 */
function distinct(a) {
    return Array.from(new Set(a));
}
