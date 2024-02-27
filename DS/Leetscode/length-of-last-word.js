// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  const str = s.trim();

  let ary = str.split(' ');
  return ary[ary.length - 1].length;
};