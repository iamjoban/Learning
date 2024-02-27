//Left Rotation and Right Rotation of a String
function rotateString(str, rotateTime, leftRotate) {
  let length = str.length;
  let mod = rotateTime % length;
  if(!leftRotate){
    mod = length - mod;
  }

  let start = mod;
  while (true){
    console.log(str[start]);
    if(start === length-1){
        start = 0;
        continue;
    }

    if(start === mod-1){
        break;
    }
    start++;
  }
}

let str = "qwertyu";
let rotateTime = 2;

rotateString(str, rotateTime, true);
console.log('----------------------');
rotateString(str, rotateTime, false);
