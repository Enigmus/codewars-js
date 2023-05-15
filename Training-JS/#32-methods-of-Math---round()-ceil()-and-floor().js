function roundIt(n) {
    const str = String(n);
    const dot = str.indexOf(".");
    const a = str.slice(0, dot).length;
    const b = str.slice(dot + 1).length;

    if (a < b) return Math.ceil(n);
    else if (a > b) return Math.floor(n);

    return Math.round(n);
}

console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));
