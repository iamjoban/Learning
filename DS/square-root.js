// function findSquareRoot(num) {
//   let i = 1;
//   let result = 1;
//   while (result <= num) {
//     result = i * i;
//     i++;
//   }
//   return i - 2;
// }

// console.log(findSquareRoot(10));

///////////
//Best approach

function findSquareRootUsingBinarySearch(searchNum) {
  let low = 1,
    high = searchNum;
  let ans = 0;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let doubleMid = mid * mid;
    if (doubleMid === searchNum) {
      ans = mid;
      break;
    }
    if (doubleMid <= searchNum) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  console.log(ans);
}

console.log(findSquareRootUsingBinarySearch(16));
