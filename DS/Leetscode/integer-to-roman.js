// https://leetcode.com/problems/integer-to-roman/

var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const keys = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let ans = '';
  let i = 0;
  while (num > 0) {
    if (num >= values[i]) {
      num -= values[i];
      ans += keys[i];
    } else {
      i++;
    }
  }

  return ans;
};
