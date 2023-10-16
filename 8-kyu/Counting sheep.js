function countSheeps(sheep) {
    return sheep.reduce((acc, el) => (acc = el == true ? acc + 1 : acc), 0);
}

console.log(countSheeps([])); //0
console.log(countSheeps([undefined])); //0
console.log(countSheeps([null])); //0
console.log(countSheeps([false])); //0
console.log(countSheeps([true])); //1
console.log(countSheeps([undefined, null, false, true])); //1
console.log(
    countSheeps([undefined, null, false, true, true, false, null, undefined])
); //2
console.log(
    countSheeps([
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
    ])
); //17
