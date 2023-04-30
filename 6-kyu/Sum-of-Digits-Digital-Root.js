function digitalRoot(n) {
    let result = (n < 10) ? n : 0;    
    while (n >= 10) {
        result += n % 10;
        n = (n - (n % 10)) / 10;
        if (n < 10) 
            result += n;
    }
    if(result > 9) return digitalRoot(result);
    
    return result;
}

console.log(digitalRoot(123456789));
