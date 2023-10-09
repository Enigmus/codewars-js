Math.round = function (number) {
    let e = fn(number);
    if (e === -1) return number;
    else if(e.s < 5) return e.n;
        else return e.n + 1;

};

Math.ceil = function (number) {
    let e = fn(number);
    if (e === -1) return number;
    else return e.n + 1;
};

Math.floor = function (number) {
    let e = fn(number);
    if (e === -1) return number;
    else return e.n;
};

function fn(num) {
    let str = String(num);
    let i = str.indexOf('.');
    num = Number(str.slice(0,i));
    if(i < 0) return -1;
        else return obj = { n: num, s:str[i + 1]};
}

console.log(
    Math.round(10000.52156)
);

