function isolateIt(arr) {
    return arr.map((el) => {
        if (el.length % 2 === 0)
            return el.slice(0, el.length / 2) + "|" + el.slice(el.length / 2);
        else
            return el.slice(0, (el.length - 1) / 2) + "|" + el.slice((el.length + 1) / 2);
    });
}

console.log(isolateIt(["abcd", "efgh", "56789"])); //
