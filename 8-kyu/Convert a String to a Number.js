const stringToNumber = str => +str
const stringToNumber1 = str => parseInt(str)
const stringToNumber2 = str => Number(str)


console.log(typeof stringToNumber('0'))
console.log(typeof stringToNumber1('1'))
console.log(typeof stringToNumber2('2'))