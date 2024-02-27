/*
Minimum increment or decrement operations required to make the array sorted

Input: arr[] = {1, 2, 1, 4, 3}
Output: 2
Add 1 to the 3rd element(1) and subtract 1 from
the 4th element(4) to get {1, 2, 2, 3, 3}

Input: arr[] = {1, 2, 2, 100}
Output: 0
Given array is already sorted.

https://www.geeksforgeeks.org/minimum-increment-or-decrement-operations-required-to-make-the-array-sorted/?ref=rp
*/
function findMinOpt(ary) {
  let min = Math.min(...ary);
  let max = Math.max(...ary);

  let temp = [];
  for (let i = min; i <= max; i++) {
    if (!temp[0]) {
      temp[0] = [];
    }
    temp[0][i] = Math.abs(ary[0] - i);
  }
  console.log("temp", temp, min, max);

  for (let i = 1; i < ary.length; i++) {
    let minimun = 1000000;
   // console.log('in')
    for (let j = min; j <= max; j++) {
      //  console.log('in2')
        minimun = Math.min(minimun, temp[i - 1][j]);
      if (!temp[i]) {
        temp[i] = [];
      }
     // console.log('add', minimun, ary[i], j)
      temp[i][j] = minimun + Math.abs(ary[i] - j);
    }
  }
  console.log("temp", temp);
  let ans = 10000;
  for (let i = min; i <= max; i++) {
     ans = Math.min(temp[temp.length-1][i]); 
  }
  console.log(ans, 'ans')
}

let ary = [1, 2, 1, 4, 3];
findMinOpt(ary);
