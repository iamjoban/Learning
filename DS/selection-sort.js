let arr = [12, 11, 13, 5, 6];

function selectionSort(ary, length) {
  for (let i = 0; i < length; i++) {
    let small = ary[i];
    let index = i;
    for (let j = i + 1; j < length; j++) {
      if (ary[j] < small) {
        index = j;
        small = ary[j];
      }
    }

    let temp = ary[index];
    ary[index] = ary[i];
    ary[i] = temp;
  }
}

selectionSort(arr, arr.length);
console.log(arr);
