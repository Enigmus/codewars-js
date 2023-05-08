function splitAndMerge(string, separator) {
    return string
        .split(" ")
        .map((el) => {
            const letter = el.split("");
            return letter.join(separator);
        })
        .join(" ");
}

console.log(splitAndMerge("My name is John", " ")); //"M y n a m e i s J o h n"
console.log(splitAndMerge("My name is John", "-")); // "M-y n-a-m-e i-s J-o-h-n"
console.log(splitAndMerge("Hello World!", ".")); // "H.e.l.l.o W.o.r.l.d.!"
console.log(splitAndMerge("Hello World!", ",")); // "H,e,l,l,o W,o,r,l,d,!"
