/*
Number of ways to insert two pairs of parentheses into a string of N characters

Input: str = “ab”
Output: 6
((a))b, ((a)b), ((ab)), (a)(b), (a(b)), a((b))
which are a total of 6 ways.

Input: str = “aab”
Output: 20
*/

function numbeOfWays(str) {
  let count = str.length + 1;
  let doubleCount = Math.pow(count,2);
  return doubleCount * ((doubleCount-1)/12);
}

numbeOfWays("ab");
