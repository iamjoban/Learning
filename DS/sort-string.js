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
    return str.join("");
  }
}

let str = "bbccdefbbaa";
let strArray = str.split("");
let sortedStr = quickSortStrring(strArray, 0, strArray.length - 1);
console.log(sortedStr);
