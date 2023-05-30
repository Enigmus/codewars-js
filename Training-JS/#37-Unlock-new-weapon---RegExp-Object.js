function countAnimals(animals, count) {
    return count.map((el) =>
        (animals.match(new RegExp(el, "g")) || []).length
    );
}

console.log(countAnimals("dog,cat", ["dog", "cat"])); // [1,1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); // [1,1,0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); // [2,1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"])); // [0,0]
