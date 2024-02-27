function findCount(strA, strB) {
  let lengthA = strA.length;
  let lengthB = strB.length;

  let temp = [];

  for (let i = 0; i <= lengthB; i++) {
    if (!temp[0]) {
      temp[0] = [];
    }
    temp[0][i] = 0;
  }

  for (let i = 0; i <= lengthA; i++) {
    if (!temp[i]) {
      temp[i] = [];
    }
    temp[i][0] = 1;
  }

  for (let i = 1; i <= lengthA; i++) {
    if (!temp[i]) {
      // temp[i] = [];
    }
    for (let j = 1; j <= lengthB; j++) {
      if (strA[i - 1] == strB[j - 1]) {
        temp[i][j] = temp[i - 1][j - 1] + temp[i - 1][j];
      } else {
        temp[i][j] = temp[i - 1][j];
      }
    }
  }
  console.log(temp);
  let m = temp.length - 1;
  let n = temp[m].length - 1;
  console.log(temp[m][n]);
}

let str1 = "GeeksforGeeks";
let str2 = "Gks";
findCount(str1, str2);
