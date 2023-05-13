function sc(apple) {
    let x = -1,
        y = -1;
    for (let i = 0; i < apple.length; i++) {
        x = i;
        y = apple[i].indexOf("B");
        if (y != -1) return [x, y];
    }
}

(apple = [
    ["B", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
]),
    (answer = [0, 0]);

console.log(sc(apple));
