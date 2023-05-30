var regex=/^-?9\d*0{4,}$/

console.log(regex.test("90000"));    //true
console.log(regex.test("-90000"));   //true
console.log(regex.test("900000000"));    //true
console.log(regex.test("91230000")); //true
console.log(regex.test("-91230000"));    //true
console.log(regex.test("190000"));   //false
console.log(regex.test("90001"));    //false
console.log(regex.test("9000")); //false
console.log(regex.test("91230"));    //false
console.log(regex.test("1-90000"));  //false
console.log(regex.test("-90000123"));    //false