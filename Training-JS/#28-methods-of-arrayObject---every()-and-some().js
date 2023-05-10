function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let a = String(arr[i]).split("").reverse().join("");
        if (a === String(arr[i + 1])) return [arr[i], arr[i + 1]];
    }
    return [-1, -1];
}

function mirrorImage2(arr) {
    let a = null, b = null;
    return arr.some((el,ind) =>{
        [a, b] = [el, arr[ind + 1]];
        return String(el).split("").reverse().join("") === String(arr[ind + 1])
    }) ? [a, b] : [-1, -1];
}

console.log(
    mirrorImage2([
        57330, 3375, 57911, 53444, 15812, 10113, 97441, 29523, 32120, 78332,
        48876, 47021, 12074, 9803, 47648, 36724,
    ])
); 
console.log(mirrorImage2([454, 86, 57, 75, 16, 88])); //[57,75]
console.log(mirrorImage([454, 0, 57, 0, 16, 88])); //[-1,-1]
