/**
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let end = str.length - 1;
  let revStr = '';
  while (end >= 0) {
    revStr += str[end];
    end--;
  }
  return str === revStr;
};