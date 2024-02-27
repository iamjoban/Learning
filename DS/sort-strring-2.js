// Alternate Lower Upper String Sort

function findPivotIndex(str, start, end) {
  let val = str[end];
  let compareIndex = start;
  for (let i = start; i < end; i++) {
    let diff = str[i].localeCompare(val);
    if (diff === -1 || diff === 0) {
      let temp = str[i];
      str[i] = str[compareIndex];
      str[compareIndex] = temp;
      compareIndex++;
    }
  }
  let temp = str[end];
  str[end] = str[compareIndex];
  str[compareIndex] = temp;
  return compareIndex;
}

function quickSortStrring(str, start, end) {
  if (start < end) {
    let pivotIndex = findPivotIndex(str, start, end);
    quickSortStrring(str, start, pivotIndex - 1);
    quickSortStrring(str, pivotIndex + 1, end);
    return str;
  }
}

let str = "bAwutndekWEdkd";
let strArray = str.split("");
let upper = [];
let lower = [];
for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
    upper.push(str[i]);
  } else {
    lower.push(str[i]);
  }
}

let upperSort = quickSortStrring(upper, 0, upper.length - 1);
let lowerSorted = quickSortStrring(lower, 0, lower.length - 1);
console.log(upperSort);
console.log(lowerSorted);

let i = 0,
  j = 0;
let finalStr = "";
let flag = false;
while (true) {
    console.log(i, j);
  if ((lowerSorted[i].localeCompare(upperSort[j]) === -1 || lowerSorted[i].localeCompare(upperSort[j]) === 0) && flag) {
    flag = false;
    if (i < lowerSorted.length) {
        
      finalStr += lowerSorted[i];
      
    }
    i++;
  } else {
    flag = true;
    if (j < upperSort.length) {
        
      finalStr += upperSort[j];
      
    }
    j++;
  }
  console.log(i, lowerSorted.length, j, upperSort.length);
  if(i>= lowerSorted.length-1 && j >= upperSort.length-1){
      break;
  }
}

console.log(finalStr);
