/*
Find the smallest window in a string containing all characters of another string

Input: string = “this is a test string”, pattern = “tist”
Output: Minimum window is “t stri”
Explanation: “t stri” contains all the characters of pattern.

Input: string = “geeksforgeeks”, pattern = “ork”
Output: Minimum window is “ksfor”
*/

function findSmallestWindow(str, pattern) {
  let map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      map.set(pattern[i], map.get(pattern[i]) + 1);
    } else {
      map.set(pattern[i], 1);
    }
  }

  console.log("pattern map", map);
  let strMap = new Map();
  let count = 0,
    start = 0,
    startIndex = -1;

  let max = 1000;

  for (let i = 0; i < str.length; i++) {
    if (strMap.has(str[i])) {
      strMap.set(str[i], strMap.get(str[i]) + 1);
    } else {
      strMap.set(str[i], 1);
    }

    if (map.has(str[i]) && strMap.get(str[i]) <= map.get(str[i])) {
      count++;
    }

    if (pattern.length === count) {
      console.log(pattern.length === count);
      console.log(str[start], 'str[start]', str[i])
      console.log(strMap, "strMap");
      while (strMap.get(str[start]) > map.get(str[start]) || map.get(str[start]) === undefined) {
        if (strMap.get(str[start]) > map.get(str[start])) {
          strMap.set(str[start], strMap.get(str[start]) - 1);
        }

        start++;
      }
      console.log("start", start);
      console.log("max", max, i - start + 1);
      if (max > i - start + 1) {
        console.log("--------------------------");
        max = i - start + 1;
        startIndex = start;
      }
    }
  }
  console.log(strMap, "strMap", count);
  console.log(startIndex, max);
  console.log(str.substr(startIndex, max))
}

let str = "geeksforgeeks";
let pattern = "ork";
findSmallestWindow(str, pattern);
