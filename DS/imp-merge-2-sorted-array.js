/*
Check if two sorted arrays can be merged to form a sorted array with no adjacent pair from the same array

Input: A[] = {3, 5, 8}, B[] = {2, 4, 6}
Output: Yes

Explanation: Merged array = {B[0], A[0], B[1], A[1], B[2], A[2]} 
Since the resultant array is sorted array, the required output is Yes. 

Input: A[] = {12, 4, 2, 5, 3}, B[] = {32, 13, 43, 10, 8}
Output: No
*/

function canMerge(ary1, ary2) {
  let i = (j = 0);
  let prev = -1;
  let flag = true;

  while (i < ary1.length && j < ary2.length) {
    if (ary1[i] < ary2[j] && prev != 0) {
      prev = 0;
      i++;
    } else if (ary1[i] > ary2[j] && prev != 1) {
      prev = 1;
      j++;
    } else if (ary1[i] === ary2[j]) {
      if (prev != 0) {
        prev = 0;
        i++;
      } else {
        prev = 1;
        j++;
      }
    } else {
      flag = false;
      break;
    }
  }

  return flag ? "Yes" : "No";
}

let ary1 = [3, 5, 8];
let ary2 = [2, 4, 6];

console.log(canMerge(ary1, ary2));
