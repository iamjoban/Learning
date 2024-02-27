/**
 * https://leetcode.com/problems/reverse-words-in-a-string
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return aproachOne(s);
};

function aproachOne(s) {
  return s.split(' ').filter((data) => {
    let s = data.trim();
    return s.length > 0;
  }).reverse().join(' ');
}
