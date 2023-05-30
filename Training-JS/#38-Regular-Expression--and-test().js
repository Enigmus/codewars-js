const findSimilarity = (str, word) =>
    str
        .split(" ")
        .filter((el) =>
            el.match(
                new RegExp(
                    `^${word[0]}\\w{${word.length - 2}}${
                        word[word.length - 1]
                    }$`,
                    "g"
                )
            )
        )
        .join(" ");

console.log(findSimilarity("bag dog dig dot doog dogs", "dog")); //"dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dig")); //"dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dot")); //"dot"
console.log(findSimilarity("bag dog dig dot doog dogs", "god")); //""
console.log(
    findSimilarity(
        "vRllN QRo cUz gdI SImLC fyQhN Gzi PWzja SxTdC VlQ SdmKC ImF",
        "SWyfC"
    )
); //"SImLC SxTdC SdmKC"
