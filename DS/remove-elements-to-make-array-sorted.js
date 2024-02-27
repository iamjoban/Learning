/*
Remove elements to make array sorted

Input: arr[] = {1, 2, 4, 3, 5, 7, 8, 6, 9, 10}
Output: 1 2 4 5 7 8 9 10

Input: arr[] = {10, 12, 9, 5, 2, 13, 14}
Output: 10 12 13 14
*/

function removeEle(ary) {
  let temp = [ary[0]];
  let j = 0;
  for (let i = 1; i < ary.length; i++) {
    if (temp[j] < ary[i]) {
      temp[++j] = ary[i];
    }
  }
  return temp;
}

let ary = [1, 2, 4, 3, 5, 7, 8, 6, 9, 10];
console.log(removeEle(ary));
