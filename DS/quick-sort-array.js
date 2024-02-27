function getPivotIndex(ary, start, end) {
  let pivotIndex = start;
  let pivlotValue = ary[end];
  for (let i = start; i < end; i++) {
    if (ary[i] < pivlotValue) {
      let temp = ary[i];
      ary[i] = ary[pivotIndex];
      ary[pivotIndex] = temp;
      pivotIndex++;
    }
  }

  let temp = ary[end];
  ary[end] = ary[pivotIndex];
  ary[pivotIndex] = temp;
  return pivotIndex;
}

function qucikSort(ary, start, end) {
  if (start < end) {
    let pivotIndex = getPivotIndex(ary, start, end);
    qucikSort(ary, start, pivotIndex - 1);
    qucikSort(ary, pivotIndex + 1, end);
  }
}

let ary = [20, 40, 10, 5, 7, 9, 100, 11];
qucikSort(ary, 0, ary.length - 1);
console.log(ary);
