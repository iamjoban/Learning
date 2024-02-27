function findSum(ary) {
  let currentMax = ary[0];
  let max = ary[0];
  for (let i = 1; i < ary.length; i++) {
      console.log(currentMax, currentMax + ary[i], Math.max(ary[i], currentMax + ary[i]))
    currentMax = Math.max(ary[i], currentMax + ary[i]);
    max = Math.max(max, currentMax);
  }
  console.log(max);
}

let ary = [-2, -3, 4, -1, -2, 1, 5, -3];
findSum(ary);

