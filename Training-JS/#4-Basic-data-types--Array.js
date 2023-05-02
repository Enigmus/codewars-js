const getLength = (arr) => arr.length         //return length of arr
const getFirst = (arr) => arr[0]              //return the first element of arr
const getLast = (arr) => arr[arr.length - 1]  //return the last element of arr
const pushElement = (arr) =>{
  var el=1;
  //push el to arr  
  arr.push(el)
  return arr;
}
const popElement = (arr) =>{
    arr.pop();       //pop an element from arr
    return arr;
}

console.log(getLength([1,2,3]));  //3
console.log(getFirst([1,2,3]));   //1
console.log(getLast([1,2,3]));    //3        
console.log(pushElement([1,2,3]).length); //4
console.log(popElement([1,2,3]).length);  //2