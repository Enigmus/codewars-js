function topSecret(str) {
    return str.replace(/\w/g, (x) => {
                switch(x){
                    case 'A': x = 'X'; break;
                    case 'B': x = 'Y'; break;
                    case 'C': x = 'Z'; break;
                    case 'a': x = 'x'; break;
                    case 'b': x = 'y'; break;
                    case 'c': x = 'z'; break;
                    case '0': x = '7'; break;
                    case '1': x = '8'; break;
                    case '2': x = '9'; break;
                    default: x = String.fromCharCode(x.charCodeAt(0) - 3)
                }        
            return x;
        });
}

console.log(topSecret("fNaJK")); //"My name is John"
