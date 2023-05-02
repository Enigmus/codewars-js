function giveMeFive(obj) {
    let out = [];
    for (const key in obj) {
        if (key.length === 5) out.push(key);
        if (obj[key].length === 5) out.push(obj[key]);
    }

    return out;
}

console.log(
    giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" })
);
