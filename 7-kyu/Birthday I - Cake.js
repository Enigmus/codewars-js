function cake(x, y) {
    let debris = 0;
    for (let i = 0; i < y.length; i += 1) {
        if (!(i % 2)) debris += y.charCodeAt(i);
        else debris += y.charCodeAt(i) - 96;
    }

    let percent = x * 0.7;

    return percent < debris ? "Fire!" : "That was close!";
}

console.log(cake(900, "abcdef")); //'That was close!
console.log(cake(56, "ifkhchlhfd")); //'Fire!'
console.log(cake(256, "aaaaaddddr")); //'Fire!'

console.log(cake(513, "qdjqyc")); //'Fire!'

