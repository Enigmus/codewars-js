/*Определить простое ли число */
function isPrime(n) {
  if (n <= 1) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i += 1) if (n % i === 0) return false;
  return true;
}
