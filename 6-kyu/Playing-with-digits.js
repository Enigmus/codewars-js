function digPow(n, p) {
    n = n.toString();    
    let sum = 0,
        k = 0;

    for(let i = 0; i < n.length; i++){
       sum += Number(n[i]) ** p;
       p++;
    }

    k = sum / Number(n);

    return Number.isInteger(k) ? k : -1;
}


//(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
