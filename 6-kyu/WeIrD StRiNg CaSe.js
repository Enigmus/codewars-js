const toWeirdCase = (string) =>
  string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, ind) => (ind % 2 === 0 ? letter.toUpperCase() : letter))
        .join("")
    )
    .join(" ");

console.log(toWeirdCase("This is a test")); //'ThIs Is A TeSt'
