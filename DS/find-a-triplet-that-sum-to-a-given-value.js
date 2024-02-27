//Find a triplet that sum to a given value
function sortArray(ary) {
  // Best ->Either quick or merge sort.

  ary.sort((a, b) => a - b);
}

function findTriplet(ary, value) {
  sortArray(ary);

  for (let i = 0; i < ary.length - 2; i++) {
    let low = i + 1;
    let high = ary.length - 1;

    while (low < high) {
      let sum = ary[i] + ary[low] + ary[high];
      if (sum === value) {
        console.log("Yes", ary[i], ary[low], ary[high]);
        return;
      }
      if (sum < value) {
        low++;
      } else {
        high--;
      }
    }
  }
}

let ary = [12, 3, 4, 1, 6, 9];
let sum = 251;

findTriplet(ary, sum);









// ------------------------------------------ Reusing sum of two logic for this ----------------------------//


function common(data, start, end, target) {
  while (start < end) {
    let sum = data[start] + data[end];
    if (sum === target) {
      flag = true;
      console.log(start, end);
      return [start, end];
    }
    if (sum > target) {
      end--;
    }
    if (sum < target) {
      start++;
    }
  }
  return null;
}

function sumOfTwo(data, target) {
  let start = 0;
  let end = data.length - 1;
  let ret = common(data, start, end, target)
  if (!ret) {
    console.log('No pair available');
  } else {
    console.log('Found', ret);
  }
}

function sumOfThree(input, target) {
  let ret = null;
  for (let i = 0; i < input.length - 2; i++) {
    let start = i + 1;
    let end = input.length - 1;
    let localTarget = target - input[i];
    ret = common(input, start, end, localTarget)
    if (ret) {
      ret = [i, ...ret];
      break;
    }
  }
  if (!ret) {
    console.log('No pair available');
  } else {
    console.log('Found', ret);
  }
}

let input = [2, 9, 0, 7, 10];
input.sort((a, b) => a - b);
console.log(input);
//console.log(sumOfTwo(input, 9))
console.log(sumOfThree(input, 9))
