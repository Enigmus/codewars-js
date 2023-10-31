function findShort(s) {
    let arr = s.split(" ").map((el) => el.length);
    arr.sort(
        (a,b) => a - b
    );
    return arr[0]
}




console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //  3
console.log(
    findShort(
        "turns out random test cases are easier than writing out basic ones"
    )
); //  3)
console.log(findShort("Let's travel abroad shall we")); //  2
