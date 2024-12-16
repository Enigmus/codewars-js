/**
 * Тимми и Сара думают, что они влюблены, но в том месте, где они живут,
 * они узнают об этом только тогда, когда каждый из них сорвет по цветку.
 * Если у одного из цветков четное количество лепестков, а у другого — нечетное,
 * это значит, что они влюблены.
 * Напишите функцию, которая будет принимать количество лепестков
 * каждого цветка и возвращать значение true, если они влюблены, и false, если нет.
 *
 * @param {Number} flower1
 * @param {Number} flower2
 * @returns {Boolean}
 */
const lovefunc = (flower1, flower2) => Boolean(flower1 % 2 ^ flower2 % 2);

console.log(lovefunc(1, 4), true);
console.log(lovefunc(2, 2), false);
console.log(lovefunc(0, 1), true);
console.log(lovefunc(0, 0), false);

console.log(lovefunc(1, 1), false);
