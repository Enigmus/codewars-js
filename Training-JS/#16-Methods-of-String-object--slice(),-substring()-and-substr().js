function cutIt(arr){
    const arrLh = arr.map((el)=>el.length)
    const min = Math.min(...arrLh);
    
    return arr.map((el)=>el.slice(0,min));
}


console.log(cutIt(["ab","cde","fgh"])) // ["ab","cd","fg"]);
console.log(cutIt(["abc","defgh","ijklmn"])) //["abc","def","ijk"]);
console.log(cutIt(["codewars","javascript","java"])) //["code","java","java"]);