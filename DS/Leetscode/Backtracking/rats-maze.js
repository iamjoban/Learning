function solveMaze(maze) {
  const solution = [];
  let length = maze.length;
  for (let i = 0; i < length; i++) {
    const col = [];
    for (let j = 0; j < length; j++) {
      col[j] = 0;
    }
    solution[i] = col;
  }

  solveMazeUtil(maze, 0, 0, length, solution);
  console.log(solution, "dd");
}

function isValid(maze, i, j, length) {
  return i >= 0 && i < length && j >= 0 && j < length && maze[i][j] === 1;
}

function solveMazeUtil(maze, i, j, length, solution) {
  if (i === length - 1 && j === length - 1 && maze[i][j] === 1) {
    solution[i][j] = 1;
    return true;
  }

  if (isValid(maze, i, j, length)) {
    if (solution[i][j] === 1) {
      return false;
    }

    solution[i][j] = 1;

    if (solveMazeUtil(maze, i + 1, j, length, solution)) {
      return true;
    }

    if (solveMazeUtil(maze, i, j + 1, length, solution)) {
      return true;
    }

    if (solveMazeUtil(maze, i - 1, j, length, solution)) {
      return true;
    }

    if (solveMazeUtil(maze, i, j - 1, length, solution)) {
      return true;
    }

    solution[i][j] = 0;
    return false;
  }
  return false;
}

let maze = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];
N = maze.length;
solveMaze(maze);
