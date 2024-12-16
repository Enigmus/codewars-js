/**
 * Создайте программу, которая фильтрует список строк и возвращает список,
 * содержащий только имена ваших друзей.
 * Если в имени ровно 4 буквы, то это точно ваш друг!
 *
 * @param {Array} friends
 * @returns {Array}
 */
const friend = (friends) => friends.filter((el) => el.length === 4);

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
