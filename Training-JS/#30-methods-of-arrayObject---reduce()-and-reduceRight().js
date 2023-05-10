function tailAndHead(arr) {
    let first = arr.reduce(
        (acc, val, i) =>
            i === 0 ? acc : acc.concat(Number(String(val).slice(0, 1))),
        []
    );
    let last = arr.reduce(
        (acc, val, i) =>
            i === arr.length - 1
                ? acc
                : acc.concat(Number(String(val).slice(-1))),
        []
    );

    let out = first.map((el, i) => el + last[i]);
    return out.reduce((acc, val) => (acc *= val), 1);
}



console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78])); // 532350
