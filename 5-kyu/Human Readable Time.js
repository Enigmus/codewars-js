/**
 * Write a function, which takes a non-negative integer (seconds)
 * as input and returns the time in a human-readable format (HH:MM:SS)
 * HH = hours, padded to 2 digits, range: 00 - 99
 * MM = minutes, padded to 2 digits, range: 00 - 59
 * SS = seconds, padded to 2 digits, range: 00 - 59
 * The maximum time never exceeds 359999 (99:59:59)
 * You can find some examples in the test fixtures
 *
 *
 * @param {Number} seconds
 * @returns {String}
 */
function humanReadable(seconds) {
  let out = (num) => (num < 10 ? "0".concat(num) : num);
  if (seconds < 60) return `00:00:${out(seconds)}`;
  if (seconds < 3600) {
    let minute = Math.trunc(seconds / 60);
    return `00:${out(minute)}:${out(seconds - minute * 60)}`;
  }
  let hour = Math.trunc(seconds / 3600);
  let minute = Math.trunc((seconds - hour * 3600) / 60);
  let sec = seconds - hour * 3600 - minute * 60;
  return `${out(hour)}:${out(minute)}:${out(sec)}`;
}

console.log(humanReadable(0), "00:00:00");
console.log(humanReadable(59), "00:00:59");
console.log(humanReadable(60), "00:01:00");
console.log(humanReadable(90), "00:01:30");
console.log(humanReadable(3599), "00:59:59");
console.log(humanReadable(3600), "01:00:00");
console.log(humanReadable(45296), "12:34:56");
console.log(humanReadable(86399), "23:59:59");
console.log(humanReadable(86400), "24:00:00");
console.log(humanReadable(359999), "99:59:59");
