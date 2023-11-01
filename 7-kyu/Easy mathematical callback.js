const isAnagram = function(test, original) {
    if(test.length !== original.length) return false
    let arr = test.toLowerCase().split('')
    for(let i = 0; i < original.length; i++){
        let pos = arr.indexOf(original[i]);
        if(pos  > 0) arr[arr.indexOf(original[i])] = ''
        else return false;
        console.log(arr);
    }
    
    return (arr.join('').length === 0) ? true : false;
};


console.log(isAnagram("foefet", "toffee")); //true, 'The word "foefet" is an anagram of "toffee"'
//console.log(isAnagram("Buckethead", "DeathCubeK")); //true, 'The word "Buckethead" is an anagram of "DeathCubeK"'
//console.log(isAnagram("Twoo", "WooT")); //true, 'The word "Twoo" is an anagram of "WooT"'

console.log(isAnagram("dumble", "bumble")); //false, 'Characters do not match for test case "dumble", "bumble"'
//console.log(isAnagram("ound", "round"));    //false, 'Missing characters for test case "ound", "round"'
//console.log(isAnagram("apple", "pale"));    //false, 'Same letters, but different count'