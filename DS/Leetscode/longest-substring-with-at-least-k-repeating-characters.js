/**
 * https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var longestSubstring = function (s, k) {
  if (s.length === 0 || s.length < k) {
    return 0;
  }
  let tracker = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    tracker[char] = (tracker[char] || 0) + 1;
  }

  let index = 0;
  while (index < s.length && tracker[s[index]] >= k) {
    index++;
  }

  if (index === s.length) {
    return s.length;
  }

  console.log(s.substring(0, index), 'left');
  console.log(s.substring(index + 1), 'right');
  let left = longestSubstring(s.substring(0, index), k);
  let right = longestSubstring(s.substring(index + 1), k);

  return Math.max(left, right);
};


/*
Example 1:
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.


Example 2:
Input: s = "ababbc", k = 2
Output: 5
 Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/
