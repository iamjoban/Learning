// https://leetcode.com/problems/valid-number/
/**
 * @param {string}
 * @return {boolean}
 */

var isNumber = function (s) {
  let str = s.toLowerCase();

  let numberSeen = false;
  let pointSeen = false;
  let eSeen = false;
  let numberAfterESeen = true;

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char >= 0 || char <= 9) {
      numberSeen = true;
      numberAfterESeen = true;
    } else if (char === '.') {
      if (pointSeen || eSeen) {
        return false;
      }
      pointSeen = true;
    } else if (char === 'e') {
      if (eSeen || !numberSeen || i === str.length - 1) {
        return false;
      }
      eSeen = true;
    } else if (char === '-' || char === '+') {
      if (i > 0 && str.charAt(i - 1) !== 'e' || i === str.length - 1) {
        return false;
      }
    } else {
      return false;
    }
  }

  return numberSeen && numberAfterESeen;
};
