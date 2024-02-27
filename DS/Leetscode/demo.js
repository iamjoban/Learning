const GRAPH_WIDTH = 9;

function findMinDistance(distance, spt) {
  let min = Number.MAX_SAFE_INTEGER;
  let index = -1;
  for (let i = 0; i < distance.length; i++) {
    if (!spt[i] && distance[i] < min) {
      min = distance[i];
      index = i;
    }
  }
  return index;
}

function dijkstra(graph, src) {
  let spt = [];
  let distance = [];

  for (let i = 0; i < GRAPH_WIDTH; i++) {
    spt[i] = false;
    distance[i] = Number.MAX_SAFE_INTEGER;
  }

  distance[src] = 0;
  for (let node = 0; node < GRAPH_WIDTH - 1; node++) {
    let minDistanceIndex = findMinDistance(distance, spt);
    spt[minDistanceIndex] = true;
    for (let connection = 0; connection < GRAPH_WIDTH; connection++) {
      if (
        !spt[connection] &&
        graph[minDistanceIndex][connection] !== 0 &&
        distance[minDistanceIndex] + graph[minDistanceIndex][connection] <
          distance[connection]
      ) {
        distance[connection] =
          distance[minDistanceIndex] + graph[minDistanceIndex][connection];
      }
    }
  }
  console.log(distance);
}

let graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];
dijkstra(graph, 0);
