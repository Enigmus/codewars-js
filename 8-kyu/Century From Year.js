function century(year) {
    if (year < 101) return 1;
    return year % 100
        ? (year - (year % 100)) / 100 + 1
        : (year - (year % 100)) / 100;
}

console.log(century(1900));


/**Придумал велосипед
 * А надо было использовать всего то Math.ceil() %)
 */