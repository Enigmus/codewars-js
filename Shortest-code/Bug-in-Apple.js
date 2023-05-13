const sc = a => [x = a.findIndex((i)=>i.includes("B")),y = a[x].indexOf("B")]

apple = [
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "A"],
    ["A", "A", "A", "A", "A"],
]

console.log(sc(apple));
