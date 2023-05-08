function firstToLast(str, c) {
    const first = str.indexOf(c);
    if (first < 0) return -1;

    const last = str.lastIndexOf(c);
    const pos = last - first;
    if (pos === 0) return 0;
    if (pos < 0) return -1;
    
    return pos;
}

console.log(firstToLast("ababc", "a")); // 2
console.log(firstToLast("ababc", "c")); // 0
console.log(firstToLast("ababc", "d")); // -1
