function colourAssociation(array) {
    let a = [];
    for (let arr of array) {
        a.push({ [arr[0]]: arr[1] });
    }
    return a;
}

console.log(
    colourAssociation([
        ["white", "goodness"],
        ["blue", "tranquility"],
    ])
); //[{white:"goodness"},{blue:"tranquility"}]);
console.log(
    colourAssociation([
        ["red", "energy"],
        ["yellow", "creativity"],
        ["brown", "friendly"],
        ["green", "growth"],
    ])
); //[{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
