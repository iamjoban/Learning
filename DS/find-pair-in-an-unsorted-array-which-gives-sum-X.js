//Given an array A[] and a number x, check for pair in A[] with sum as x
function findPair(ary, sum) {
  let set = new Set();
  let i = 0;
  while (i < ary.length) {
    let diff = sum - ary[i];
    if (set.has(diff)) {
      console.log("Pair is->", ary[i], diff);
    }
    set.add(ary[i]);
    i++;
  }
}

let ary = [7, 5, 3, 9, 3, 1];
let sum = 8;
findPair(ary, sum);


