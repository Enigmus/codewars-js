const inArray = (array1, array2) =>
  array1
    .filter((el) =>
      array2.find((e) => e.search(new RegExp(`${el}`, "g")) !== -1)
    )
    .sort((a, b) => a.localeCompare(b));

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

a1 = ["live", "strong", "arp"];

console.log(inArray(a1, a2), ["arp", "live", "strong"]);
