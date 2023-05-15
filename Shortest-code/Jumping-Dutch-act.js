const sc = (f) =>
    f <= 1
        ? ""
        : "Aa~ "
              .repeat(f - 1)
              .concat("Pa!")
              .concat(f <= 6 ? " Aa!" : "");

console.log(sc(2)); //"Aa~ Pa! Aa!"
console.log(sc(6)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
console.log(sc(7)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
console.log(sc(10)); //"Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
