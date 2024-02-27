/*
Generate all possible sorted arrays from alternate elements of two given sorted arrays
A = {10, 15, 25}
B = {1, 5, 20, 30}

The resulting arrays are:
  10 20
  10 20 25 30
  10 30
  15 20
  15 20 25 30
  15 30
  25 30
*/

function findAllSortedArray(a, b, c, startA, startB, flag) {
    if (flag) {
      for (let i = startA; i < a.length; i++) {
        if (a[i] > c[c.length - 1]) {
          c.push(a[i]);
          findAllSortedArray(a, b, c, i + 1, startB, !flag);
        }
      }
    } else {
      for (let j = startB; j < b.length; j++) {
        if (b[j] > c[c.length - 1]) {
          c.push(b[j]);
          console.log(c);
          findAllSortedArray(a, b, c, startA, j + 1, !flag);
        }
      }
    }
    console.log('pop', startA, startB, flag)
    c.pop();
  }
  
  let a = [10, 15, 25];
  let b = [5, 20, 30];
  
  for (let i = 0; i < a.length; i++) {
    findAllSortedArray(a, b, [a[i]], i, 0, false);
  }


  