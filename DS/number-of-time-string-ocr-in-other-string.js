//Find number of times a string occurs as a subsequence in given string

function findCount(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;

  let lookup = [];
  for (let i = 0; i <= length2; i++) {
    if (!lookup[0]) {
      lookup[0] = [];
    }
    lookup[0][i] = 0;
  }
  for (let i = 0; i <= length1; i++) {
    if (!lookup[i]) {
      lookup[i] = [];
    }
    lookup[i][0] = 1;
  }

  for (let i = 1; i <= length1; i++) {
    if (!lookup[i]) {
        lookup[i] = [];
      }
    for (let j = 1; j <= length2; j++) {
       // console.log(str1[i - 1] , str2[j - 1])
      if (str1[i - 1] == str2[j - 1]) {
          console.log(lookup[i - 1][j - 1] + lookup[i - 1][j])
        lookup[i][j] = lookup[i - 1][j - 1] + lookup[i - 1][j];
      } else {
        lookup[i][j] = lookup[i - 1][j];
      }
    }
  }
  console.log(lookup);
}

let str1 = "GeeksforGeeks";
let str2 = "Gks";
findCount(str1, str2);


