function pigIt(str){
    let arrFromStr = str.split(' ');
    const newArr = arrFromStr.map((el) => {
        if(el.length === 1 && (/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g.test(el))) 
            return el;
        let arr = el.split('');
        let letter = arr.shift();
        arr.push(letter,'ay');
        return el = arr.join('');
    });
    return newArr.join(' ');
  }



console.log(pigIt('Pig latin is cool'));     // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));         // elloHay orldway !