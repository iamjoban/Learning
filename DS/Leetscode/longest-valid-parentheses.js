/**
 *  https://leetcode.com/problems/longest-valid-parentheses/
 * @param {string}
 * @return {number}
 */
var longestValidParentheses = function (str) {

  let stack = [-1];
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === '(') {
      stack.unshift(i);
    } else {
      if (stack.length !== 0) {
        stack.shift()
      }

      if (stack.length !== 0) {
        max = Math.max(max, i - stack[0])
      } else {
        stack.unshift(i);
      }

    }
  }
  return max;
};