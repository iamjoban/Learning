/*
  Check if a Matrix is Reverse Bitonic or Not

 A Reverse Bitonic String is a string in which the characters are arranged in decreasing order
 followed by increasing order of their ASCII values

Input: m[][] = {{2, 3, 4}, {1, 2, 3}, {4, 5, 6} } 
Output: Yes
Explanation: 
All the rows of the given matrix forms an increasing sequence. 
All the columns of the given matrix {2, 1, 4}, {3, 2, 5}, {4, 3, 6} forms a decreasing followed by increasing sequence. 
Therefore, the matrix is Reverse Bitonic.


Input: m[][] = {{1, 2, 3}, {4, 5, 6}, {2, 5, 4}} 
Output: No 
Explanation: 
Since the column {1, 4, 2} does not satisfy any of the three conditions, the given matrix is not Reverse Bitonic.
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
    return true;
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
    return true;
  }
  return false;
}

let ary = [
  [2, 3, 4],
  [1, 2, 3],
  [4, 5, 6]
];

let reverseBitonicFlag = true;
for (let i = 0; i < ary.length; i++) {
  let flag = isReverseBitonic(ary[i]);
  if (!flag) {
    reverseBitonicFlag = false;
    break;
  }
}

console.log(reverseBitonicFlag ? 'YES' : 'NO');
