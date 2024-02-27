/*
  Check if a given string is a Reverse Bitonic String or not

 A Reverse Bitonic String is a string in which the characters are arranged in decreasing order
 followed by increasing order of their ASCII values

Input: str = “zyxbcd” 
Output: YES 
Explanation: 
In the above string, the ASCII values first decreases {z, y, x} and then increases {b, c, d}.
Input: str = “abcdwef” 
Output: NO
*/

function isReverseBitonic(str) {
  let i = (j = 0);

  for (i = 0; i < str.length - 1; i++) {
    if (str[i] > str[i + 1]) {
      continue;
    }
    if (str[i] <= str[i + 1]) {
      break;
    }
  }

  if (i === str.length - 1) {
    return "YES";
  }

  for (j = i; j < str.length - 1; j++) {
    if (str[j] < str[j + 1]) {
      continue;
    }
    if (str[j] >= str[j + 1]) {
      break;
    }
  }

  if (j === str.length - 1) {
    return "YES";
  }
  return "NO";
}

let str = "zyxbcd";

console.log(isReverseBitonic(str));
