/*
BIT.js
*/

function findSum(index, BITAry) {
  index = index + 1;
  let sum = 0;
  while (index > 0) {
      sum+=BITAry[index];
    index -= index & -index;
  }
  return sum;
}

function updateBIT(len, index, val, BITAry) {
  index = index + 1;
  
  while (index <= len) {
    // console.log(index, sum);
    BITAry[index] += val;

    index += index & -index;
  }
  //return sum;
}

function constructBITree(ary) {
  let BITAry = [];
  for (let i = 1; i <= ary.length; i++) {
    BITAry[i] = 0;
  }
  for (let i = 0; i < ary.length; i++) {
    updateBIT(ary.length, i + 1, ary[i], BITAry);
  }
  console.log(BITAry);
  return BITAry;
}

let ary = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9];

let BITAry = constructBITree(ary);
console.log(findSum(3, BITAry));
