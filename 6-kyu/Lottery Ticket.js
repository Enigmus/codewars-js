const bingo = (ticket, win) =>
  ticket.reduce(
    (acc, el) =>
      el[0].split("").some((e) => e.charCodeAt() === el[1]) ? acc + 1 : acc,
    0
  ) >= win
    ? "Winner!"
    : "Loser!";

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); //'Loser!'
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
); //'Winner!'
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
); //'Loser!'
