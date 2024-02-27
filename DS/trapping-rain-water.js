//Trapping rain water

function findWaterUnits(ary) {
  const left = [ary[0]];
  for (let i = 1; i < ary.length; i++) {
    left[i] = Math.max(ary[i], left[i - 1]);
  }

  const right = [];
  right[ary.length - 1] = ary[ary.length - 1];
  for (let i = ary.length - 2; i >= 0; i--) {
    right[i] = Math.max(ary[i], right[i + 1]);
  }

  let total = 0;
  for (let i = 0; i < ary.length; i++) {
    total += Math.min(left[i], right[i]) - ary[i];
  }

  return total;
}

let ary = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(findWaterUnits(ary));
