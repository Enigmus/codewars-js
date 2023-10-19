function duplicateEncode(word){
    let arr = word.split('');
    return arr
}


console.log(duplicateEncode("din"));    //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success"));    //")())())","should ignore case"
console.log(duplicateEncode("(( @"));   //"))(("