/**
 * Крестики нолики
 * Функция проверки игрового поля
 *
 * Вовзвращаемые значения
 *
 * -1   если доска еще не закончена И никто еще не выиграл (есть пустые места),
 * 1    если бы победил «X»,
 * 2    если бы победил "О",
 * 0    если это кошачья игра (т.е. ничья).
 *
 * @param {Array} board
 * @returns Number
 */
function isSolved(board) {
  function check(arr, val) {
    const combine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const a = arr.flat(1);
    return combine.some((elem) => elem.every((el) => a[el] === val));
  }

  if (check(board, 1)) return 1;
  if (check(board, 2)) return 2;

  if (board.some((el) => el.find((e) => e === 0) === 0)) return -1;
  return 0;
}

console.log(
  isSolved([
    [0, 1, 2],
    [0, 2, 2],
    [2, 1, 0],
  ])
);

console.log(
  [
    [0, 1, 2],
    [0, 2, 2],
    [2, 1, 0],
  ].flat(1)
);
