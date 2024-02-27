function isValid(graph, colors) {
  const { length } = graph[0];
  for (let i = 0; i < length; i++) {
    for (j = i + 1; j < length; j++) {
      if (graph[i][j] && colors[i] === colors[j]) {
        return false;
      }
    }
  }
  return true;
}

function coloringNodes(graph, colors, currentNode, totalNodes) {
  //Exist condition
  if (currentNode === totalNodes) {
    if (isValid(graph, colors)) {
      console.log("Solution", colors);
      return true;
    }
    return false;
  }

  for (let i = 1; i < totalNodes; i++) {
    colors[currentNode] = i;
    if (coloringNodes(graph, colors, currentNode + 1, totalNodes)) {
      return true;
    }
    //backtrace
    colors[currentNode] = 0;
  }
  return false;
}

let graph = [
  [false, true, true, true],
  [true, false, true, false],
  [true, true, false, true],
  [true, false, true, false],
];

let totalNodes = 4; // Number of colors

const colors = new Array(totalNodes).fill(0);

coloringNodes(graph, colors, 0, totalNodes);
