function binarySearch(ary, low, high, searchVal) {
  if (low > high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  //console.log(mid, ary[mid], searchVal);
  if (ary[mid] === searchVal) {
    return mid;
  }
  if (ary[mid] > searchVal) {
    return binarySearch(ary, low, mid - 1, searchVal);
  } else {
    return binarySearch(ary, mid + 1, high, searchVal);
  }
}

function findLocation(ary, searchVal) {
  let low = 0;
  let high = 1;

  while (ary[high] && ary[high] < searchVal) {
    low = high;

    if (high * 2 < ary.length) {
      high *= 2;
    } else {
      high = ary.length;
    }
  }
  // console.log('low', low, 'high', high);

  let loc = binarySearch(ary, low, high, searchVal);
  console.log("Loc is -> ", loc);
}

let ary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findLocation(ary, 3);
