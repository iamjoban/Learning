/**
 * https://leetcode.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (!checkIfValid(a) && !checkIfValid(b)) {
    return add(a, b);
  }

};

function checkIfValid(str) {
  let flag = str.match(/[^01]/) !== null;
  let hasLeadingZero = str.length > 1 && str[0] === '0';
  return flag || hasLeadingZero;
}

function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let finalStr = [];
  while (i >= 0 || j >= 0) {
    let first = i >= 0 ? parseInt(a[i]) : 0;
    let second = j >= 0 ? parseInt(b[j]) : 0;
    let localSum = first + second + carry;
    switch (localSum) {
      case 0:
        finalStr.unshift('0');
        carry = 0;
        break;
      case 1:
        finalStr.unshift('1');
        carry = 0;
        break;
      case 2:
        finalStr.unshift('0');
        carry = 1;
        break;
      case 3:
        finalStr.unshift('1');
        carry = 1;
        break;
    }
    i--;
    j--;
  }
  if (carry) {
    finalStr.unshift('1');
  }
  return finalStr.join('');;
}
