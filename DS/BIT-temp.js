function findSum(BITAry, index) {
  let sum = 0;

  while (index > 0) {
    sum += BITAry[index];

    index -= index & -index;
  }
  return sum;
}

function updateBIT(len, index, val, BITAry) {
  while (index <= len) {
    BITAry[index] += val;

    index += index & -index;
  }
  return BITAry;
}

function constructBITree(ary) {
  let BITAry = [];
  for (let i = 1; i <= ary.length; i++) {
    BITAry[i] = 0;
  }

  for (let i = 0; i < ary.length; i++) {
    updateBIT(ary.length, i + 1, ary[i], BITAry);
  }
  return BITAry;
}

let ary = [2, 1, 1, 3, 2, 3, 4, 5, 6, 7, 8, 9];

let BITAry = constructBITree(ary);
console.log(findSum(BITAry, 3));
