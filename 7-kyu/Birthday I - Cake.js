/**
 * 
 * @param {Number} x 
 * @param {Array} y 
 * @returns 
 */
function cake(x, y) {
    let debris = 0;
    for (let i = 0; i < y.length; i += 1) {
        debris += (!(i % 2)) ? y.charCodeAt(i) : y.charCodeAt(i) - 96;
    }
    return x * 0.7 < debris ? "Fire!" : "That was close!";
}

console.log(cake(900, "abcdef")); //'That was close!
console.log(cake(56, "ifkhchlhfd")); //'Fire!'
console.log(cake(256, "aaaaaddddr")); //'Fire!'

console.log(cake(513, "qdjqyc")); //'Fire!'

