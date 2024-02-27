function permute(str, l, r) {
  if (l == r) console.log(str);
  else {
    for (let i = l; i <= r; i++) {
      console.log('going to swap->', str[l], str[i]);
      str = swap(str, l, i);
      permute(str, l + 1, r);
      console.log('After -> going to swap->', str[l], str[i]);
      str = swap(str, l, i);
    }
  }
}

/**
 * Swap Characters at position
 * @param a string value
 * @param i position 1
 * @param j position 2
 * @return swapped string
 */
function swap(a, i, j) {
  console.log(i, j)
  // console.log("start", a);
  let ary = a.split("");
  let temp;
  temp = ary[i];
  ary[i] = ary[j];
  ary[j] = temp;
  // console.log("end", a);
  return ary.join("");
}

let str = "ABC";
let n = str.length;

permute(str, 0, n - 1);


/*
ABC
ACB
BAC
BCA
CBA
CAB
 */