function merge(left, right) {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left).concat(right);
}

function mergeSort(ary) {
  if (ary.length <= 1) return ary;
  let mid = Math.floor(ary.length / 2);
  let left = mergeSort(ary.slice(0, mid));
  let right = mergeSort(ary.slice(mid));
  return merge(left, right);
}

mergeSort([2, 5, 10, 57, 9, 12, 13]);
