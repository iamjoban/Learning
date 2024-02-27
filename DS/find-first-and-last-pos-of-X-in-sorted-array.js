//Find first and last positions of an element in a sorted array

function findFirst(ary, low, high, num) {
  if (low > high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);
  //console.log(mid);
  if (mid === 0 || (ary[mid - 1] < num && ary[mid] === num)) {
    // console.log("mid");
    return mid;
  }
  if (ary[mid] < num) {
    return findFirst(ary, mid + 1, high, num);
  } else {
    return findFirst(ary, low, mid - 1, num);
  }
}

function findLast(ary, low, high, num) {
  if (low > high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);
  //console.log(mid);
  if (mid === high || (ary[mid + 1] > num && ary[mid] === num)) {
    // console.log("mid");
    return mid;
  }
  if (ary[mid] <= num) {
    return findLast(ary, mid + 1, high, num);
  } else {
    return findLast(ary, low, mid - 1, num);
  }
}

let ary = [1, 3, 4, 5, 5, 5, 6, 7, 8, 9];
let find = 3;
console.log(findFirst(ary, 0, ary.length - 1, find));
console.log(findLast(ary, 0, ary.length - 1, find));
