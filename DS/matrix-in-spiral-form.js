function spiralForm(ary) {
  let startRow = 0;
  let totalRows = ary.length;
  let startColumn = 0;
  let totalColumn = ary[0].length;

  while (startRow < totalRows && startColumn < totalColumn) {
    for (let i = startColumn; i < totalColumn; i++) {
      console.log(ary[startRow][i]);
    }
    startRow++;
    for (let i = startRow; i < totalRows; i++) {
      console.log(ary[i][totalColumn - 1]);
    }
    totalColumn--;
    if (startColumn < totalColumn) {
      for (let i = totalColumn - 1; i >= startColumn; i--) {
        console.log(ary[totalRows - 1][i]);
      }
      totalRows--;
    }
    if (startRow < totalRows) {
      for (let i = totalRows - 1; i >= startRow; i--) {
        console.log(ary[i][startColumn]);
      }
      startColumn++;
    }
  }
}

let ary = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

spiralForm(ary);