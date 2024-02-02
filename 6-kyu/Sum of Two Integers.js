function add(a, b) {
  if (b == 0) return a;
  let sum = a ^ b; // добавляем без переноса
  let carry = (a & b) << 1; // перенос без суммирования
  return add(sum, carry); // рекурсия
}

console.log(add(23, 17)); // 40
console.log(add(-50, -176)); // -226
