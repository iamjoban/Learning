// //Roate array to left by N time

// function rotateArrayByNTimes(ary, times) {
//   let length = ary.length;

//   for (let i = 0; i < length; i++) {
//     let mod = times % length;

//     console.log(ary[(i + mod) % length]);
//   }
//   return ary;
// }

// let ary = [1, 3, 5, 7, 9];
// let roateTime = 2;
// console.log(rotateArrayByNTimes(ary, roateTime));

//Roate array to left by N time

function rotateArrayByNTimes(ary, times) {
  let length = ary.length;

  let mod = times % length;
  let startIndex = mod;
  //console.log(mod)
  while (true) {
      console.log(ary[startIndex])
      if(startIndex === length-1){
          startIndex = 0;
          continue;
      }
      if(startIndex === mod-1){
          break;
      }
      startIndex++;
  }
  return ary;
}

let ary = [1, 3, 5, 7, 9];
let roateTime = 14;
console.log(rotateArrayByNTimes(ary, roateTime));
