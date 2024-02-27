function removeDuplicate(ary) {
  let j = 0;
  for (let i = 0; i < ary.length - 1; i++) {
    if (ary[i] != ary[i + 1]) {
      ary[j++] = ary[i];
    }
  }
  ary[j]= ary[ary.length-1];
  return ary.slice(0, j+1);
}

let ary = [1, 2, 2, 2, 2, 5, 6, 7, 7, 8, 8];
console.log(removeDuplicate(ary));
