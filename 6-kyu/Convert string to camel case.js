function toCamelCase(str) {
  return str.length === 0
    ? ""
    : str
        .match(/([a-zA-Z]{1,})/g)
        .map((el, i) =>
          i === 0 ? el : el.replace(/(^[a-zA-Z])/g, (el) => el.toUpperCase())
        )
        .join("");
}

console.log(toCamelCase("the_Stealth-warrior"));
