function strCount(obj, count = 0) {
  function obOut(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] != null) {
        obOut(obj[key]);
      } else {
        if (typeof obj[key] === "string") count++;
      }
    }
  }
  obOut(obj);
  return count;
}

console.log(
  strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: { f: "df" },
  })
); //3
