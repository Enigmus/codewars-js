/**
 *
 * @param {Number} s1
 * @param {Number} s2
 * @param {Number} s3
 * @returns String
 */
function getGrade(s1, s2, s3) {
  let out = (s1 + s2 + s3) / 3;
  if (out >= 90) return "A";
  if (out >= 80 && out < 90) return "B";
  if (out >= 70 && out < 80) return "C";
  if (out >= 60 && out < 70) return "D";
  return "F";
}
