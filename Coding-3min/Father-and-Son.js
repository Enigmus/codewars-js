function sc(s) {
    let arr = s.split("");
    let str = arr.filter((el) => {
        if (
            arr.indexOf(el.toLowerCase()) != -1 &&
            arr.indexOf(el.toUpperCase()) != -1
        ) {
            return true;
        } else return false;
    });
    return str.join("");
}

console.log(sc("OzhnHgpGhQGZoZZnDciAjSWtybjZgpK"));
