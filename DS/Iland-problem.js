function traverseEveryConnectedNode(fn, input, i, j, rows, cols) {
  fn(input, i, j + 1, rows, cols); // right side
  fn(input, i, j - 1, rows, cols); // left side
  fn(input, i - 1, j, rows, cols); // Up side
  fn(input, i + 1, j, rows, cols);  // Down side

  //Following lines will be used to traverse diagonals
  // fn(input, i + 1, j + 1, rows, cols); // right down
  // fn(input, i - 1, j - 1, rows, cols); // left up
  // fn(input, i - 1, j + 1, rows, cols); // right up
  // fn(input, i + 1, j - 1, rows, cols); // left down
}

function findConnectedNodes(input, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || input[i][j] === "0") {
    return;
  }
  input[i][j] = "0";
  traverseEveryConnectedNode(findConnectedNodes, input, i, j, rows, cols)
}

function foundIslands(input) {
  let count = 0;
  let rows = input.length;
  let cols = input[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === "1") {
        count++;
        input[i][j] = "0";

        traverseEveryConnectedNode(findConnectedNodes, input, i, j, rows, cols)
      }
    }
  }
  return count;
}

//Input 
let input = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]];

console.log(foundIslands(input));