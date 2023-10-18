const numberToString = num => '' + num
const numberToString1 = num => num.toString()
const numberToString2 = num => String(num)


console.log(typeof numberToString(0))
console.log(typeof numberToString1(1))
console.log(typeof numberToString2(2))