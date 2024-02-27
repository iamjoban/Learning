// Print distinct sorted permutations with duplicates allowed in input
function findPermutations(str, start, end) {
    if (start == end) {
        console.log( str);
        return;
    }
    
    for (let i = start; i <= end; i++) {
      str = swap(str, i , start);
      findPermutations(str, start+1, end);
      str = swap(str, i, start);
    }
  }
  
  function swap(strMain, i, j) {
    let str = strMain.split("");
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
    return str.join("");
  }
  
  let str = "BAC";
  findPermutations(str, 0, str.length - 1);



