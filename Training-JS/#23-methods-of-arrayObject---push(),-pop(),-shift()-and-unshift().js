function infiniteLoop(arr, d, n) {
    let lh = [];
    let out = [];
    const newArr = arr.reduce((acc, val) => acc.concat(val));

    for (let i = 0; i < arr.length; i++) {
        lh.push(arr[i].length);
    }

    for (let i = 0; i < n; i++) {
        if (d === "left") {
            newArr.push(newArr.shift());
        } else if (d === "right") {
            newArr.unshift(newArr.pop());
        }
    }

    for (let i = 0; i < lh.length; i++) {
        let a = [];
        for (let j = 0; j < lh[i]; j++) {
            a.push(newArr[0]);
            newArr.shift();
        }
        out.push(a);
    }

    return out;
}

console.log(
    infiniteLoop(
        [
            [1, 2],
            [3, 4, 5, 6],
            [7, 8, 9, 10],
        ],
        "left",
        2
    )
);
//  [[3,4],[5,6,7,8],[9,10,1,2]]
