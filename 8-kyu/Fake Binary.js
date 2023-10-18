const fakeBin = (x) =>
    x
        .split("")
        .map((el) => (el < 5 ? 0 : 1))
        .join("");
