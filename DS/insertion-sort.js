let arr = [12, 11, 13, 5, 6];

function insertionSort(ary, length) {
  for (let i = 0; i < length; i++) {
    let key = ary[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

insertionSort(arr, arr.length);
console.log(arr);
