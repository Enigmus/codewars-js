const sc = s => {
    return s.split("").filter(e => 
         (
            s.indexOf(e.toLowerCase()) > -1 &&
            s.indexOf(e.toUpperCase()) > -1
        ) 
            ? 1 : 0
    ).join("")
}

console.log(sc("OzhnHgpGhQGZoZZnDciAjSWtybjZgpK"));