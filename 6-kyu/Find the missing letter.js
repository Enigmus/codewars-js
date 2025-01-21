/**
 * Напишите метод, который принимает в качестве входных данных
 * массив последовательных (возрастающих) букв и возвращает отсутствующую букву в массиве.
 *
 * @param {Array} array
 * @returns String
 */
function findMissingLetter(array) {
  return String.fromCharCode(
    array.reduce(
      (acc, el) => (acc === el.charCodeAt() ? ++acc : acc),
      array[0].charCodeAt()
    )
  );
}

console.log(findMissingLetter(["a", "b", "d", "e", "f"]), "c");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");

console.log(String.fromCharCode(97));
