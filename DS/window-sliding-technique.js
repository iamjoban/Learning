// Window Sliding Technique

// Brute Force Approach
function findHighestSumOfKElements(ary, k) {
  let length = ary.length;
  let highestSum = 0;
  for (let i = 0; i < length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < k + i; j++) {
      sum += ary[j];
    }
    highestSum = Math.max(highestSum, sum);
  }
  console.log(highestSum);
}

// Efficient approach
function findHighestSum(ary, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += ary[i];
  }
  //console.log(sum)

  let newSum = sum;
  for (let i = k; i < ary.length; i++) {
   // console.log(sum, '+', ary[i], '-', ary[i-k])
    sum = sum + ary[i] - ary[i - k];
    
    newSum = Math.max(newSum, sum);
  }
  console.log(newSum);
}

let ary = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let k = 4;

// With Brute Force Approach
findHighestSumOfKElements(ary, k);

findHighestSum(ary, k);
