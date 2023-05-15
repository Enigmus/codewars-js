function sc(floor) {
    let str = "Aa~ ";
    if (floor <= 1) return "";
    if (floor <= 6) return str.repeat(floor - 1).concat("Pa! Aa!");

    return str.repeat(floor - 1).concat("Pa!");
}

console.log(sc(2)); //"Aa~ Pa! Aa!"
console.log(sc(6)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
console.log(sc(7)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
console.log(sc(10)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
