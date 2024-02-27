/*
Shortest substring of a string containing all given words

*/

function findSubStr(str, wordArray) {
  let orgStr = str;
  str = str.replaceAll(".", "");
  str = str.replaceAll(", ", "");

  let map = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    map.set(wordArray[i], -1);
  }

  let strAry = str.split(" ");
  let count = 0;
  let max = 1000;
  let start = (end = 0);
  for (let i = 0; i < strAry.length; i++) {
    if (map.has(strAry[i])) {
      let index = map.get(strAry[i]);
      if (index === -1) {
        count++;
      }
      map.set(strAry[i], i);

      if (count === wordArray.length) {
       // console.log(map);
        let min = 1000;
        for (let [key, value] of map) {
          if (value < min) {
            min = value;
          }
        }
       // console.log("min", min);
        let s = i - min;
       // console.log("s", s);
        if (s < max) {
          start = min;
          end = i;
          max = s;
        //  console.log("start", start, "end", end);
        }
      }
    }
  }
  return orgStr.split(" ").slice(start, end+1).join(" ");
  //console.log(start, end);
}

let str =
  "The world is here. this is a life full of ups and downs. life is world.";
let wordArray = ["life", "ups", "is", "world"];

console.log(findSubStr(str, wordArray));
