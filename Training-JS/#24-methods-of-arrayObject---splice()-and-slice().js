function threeInOne(arr) {
   let arr2 = [...arr];
   let sum = [];
   while(arr2.length){
        let [a,b,c] = arr2.splice(0,3)
        sum.push(a + b + c);
   }
   return sum;
}

console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9])); //[6,15,24]
