//Search in an array of strings where non-empty strings are sorted
/*

Input :  arr[] =  {"for", "", "", "", "geeks", 
                   "ide", "", "practice", "" , 
                   "", "quiz", "", ""};
          str = "quiz"
Output :   10
The string "quiz" is present at index 10 in 
given array.

*/

//Re write this function too find mid properly. As of now this does not wrok well.
function findMid(ary, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (ary[mid] == "") {
    start = mid - 1;
    end = mid;
    while (true) {
      console.log(start, end, ary[mid]);
      if (start < 0 || end >= ary.length) {
        break;
      }
      if(ary[start] !== ""){
          mid = start;
          break;
      }
      if(ary[end] !== ""){
        mid = end;
        break;
    }
      start--;
      end++;
      
    }
  }
  console.log(ary[mid], "->mid");
  return mid;
}

function binarySearch(ary, start, end, searchVal) {
  if (start > end) {
    return;
  }
  let mid = findMid(ary, start, end);
  console.log(ary[mid], searchVal, "ddddd");
  if (ary[mid] === searchVal) {
    console.log("Yes we found it", mid, ary[mid]);
    return mid;
  }
  // console.log(ary[mid], '///')
  let str = ary[mid];
  let diff = str[0] > searchVal[0];
  if (!diff) {
    binarySearch(ary, mid + 1, end, searchVal);
  } else {
    binarySearch(ary, start, mid - 1, searchVal);
  }
}

let ary = [
  "for",
  "",
  "",
  "",
  "geeks",
  "ide",
  "",
  "practice",
  "",
  "",
  "quiz",
  "",
  "",
];

let searchVal = "geeks";

binarySearch(ary, 0, ary.length - 1, searchVal);
