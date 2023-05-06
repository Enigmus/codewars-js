function colorOf(r, g, b) {
    function getNum(n){
        return (n < 16) ? '0' + n.toString(16) : n.toString(16);
    }
    return '#' + getNum(r) + getNum(g) + getNum(b);
}

console.log(colorOf(15,0,0));