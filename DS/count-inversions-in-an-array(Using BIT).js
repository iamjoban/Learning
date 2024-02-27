/*
Count inversions in an array | Set 3 (Using BIT)

https://www.geeksforgeeks.org/count-inversions-array-set-3-using-bit/


Input: arr[] = {8, 4, 2, 1}
Output: 6
Explanation: Given array has six inversions:
(8,4), (4,2), (8,2), (8,1), (4,1), (2,1).     


Input: arr[] = {3, 1, 2}
Output: 2
Explanation: Given array has two inversions:
(3,1), (3,2).
*/

function getSum(BITArry, index) {
  let sum = 0;
  while (index > 0) {
    sum += BITArry[index];
    index -= index & -index;
  }
  return sum;
}

function updateBIT(BITAry, len, index, val) {
  while (index <= len) {
    BITAry[index] += val;
    index += index & -index;
  }
}

function findInvestions(ary) {
  let max = 0;
  for (let i = 0; i < ary.length; i++) {
    if (max < ary[i]) {
      max = ary[i];
    }
  }
  console.log(max, "Max");
  let BITAry = []; //new Array(max+1).fill(0);
  for (let i = 1; i <= max + 1; i++) {
    BITAry[i] = 0;
  }
  console.log(BITAry);
  let invetions = 0;
  for (let i = ary.length - 1; i >= 0; i--) {
    invetions += getSum(BITAry, ary[i] - 1);
    updateBIT(BITAry, max, ary[i], 1);
  }
  console.log(BITAry, invetions);
}

let ary = [8, 4, 2, 1];

findInvestions(ary);
