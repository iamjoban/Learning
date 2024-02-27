/*
Check if two strings can be made equal by swapping one character among each other

Input: A = “SEEKSFORGEEKS”, B = “GEEKSFORGEEKG”
Output: Yes
“SEEKSFORGEEKS” and “GEEKSFORGEEKG”
can be swapped to make both the strings equal.

Input: A = “GEEKSFORGEEKS”, B = “THESUPERBSITE”
Output: No
*/

function areBothStringSame(strA, strB) {
  if (strA === strB) {
    return true;
  }
  if (strA.length !== strB.length) {
    return false;
  }

  let tempA = (tempB = "");
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      tempA += strA[i];
      tempB += strB[i];
    }
  }
  if (tempA.length === 2 && tempB.length === 2) {
    if (tempA[0] === tempA[1] && tempB[0] === tempB[1]) {
      return true;
    }
  }
  return false;
}

let strA = "SEEKSFORGEEKS";
let strB = "GEEKSFORGEEKG";

console.log(areBothStringSame(strA, strB));
