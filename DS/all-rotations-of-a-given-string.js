//Left Rotation and Right Rotation of a String
function rotateString(str, rotateTime, leftRotate) {
  let length = str.length;
  let mod = rotateTime % length;
  if (!leftRotate) {
    mod = length - mod;
  }

  let start = mod;
  let newStr = "";
  while (true) {
    newStr += str[start];

    if (start === length - 1) {
      start = 0;
      continue;
    }

    if (start === mod - 1) {
      break;
    }
    start++;
  }
  console.log(newStr);
  return newStr;
}

let str = "geeks";
let l = str.length;
console.log(str);
for (let i = 0; i < l-1; i++) {
  str = rotateString(str, 1, true);
}
