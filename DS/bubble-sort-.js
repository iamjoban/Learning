let arr = [12, 11, 13, 5, 6];

function bubbleSort(ary, length) {
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (ary[j] > ary[j + 1]) {
        let temp = ary[j];
        ary[j] = ary[j + 1];
        ary[j + 1] = temp;
      }
    }
  }
}

bubbleSort(arr, arr.length);
console.log(arr);
