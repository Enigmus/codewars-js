function highAndLow(numbers){
    let arr = numbers.split(' ');
    arr.sort(function(a,b){ 
        return a - b;
      });
    
    return `${arr[arr.length - 1]} ${arr[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));  // return "42 -9"