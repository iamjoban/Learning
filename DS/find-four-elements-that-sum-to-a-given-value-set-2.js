function findFourElements(array, sum) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      let diff = sum - currentSum;
      if (map.has(diff)) {
        let curretPairs = map.get(diff);
        // console.log(curretPairs, 'ddd')
        for (let k = 0; k < curretPairs.length; k++) {
          const [x, y] = curretPairs[k].split(',');
          //  console.log(x, y)
          if ((i !== x && i !== y) && (j !== x && j !== y)) {
            console.log(array[i], array[j], array[x], array[y]);
            return;
          }
        }
      }

      if (!map.has(currentSum)) {
        map.set(currentSum, [i + ',' + j]);
      } else {
        let temp = map.get(currentSum);
        temp.push(i + ',' + j)
        map.set(currentSum, temp);
      }
    }
  }
  console.log(map)
}

let array = [10, 2, 3, 4, 5, 9, 7, 8];
let sum = 23;

findFourElements(array, sum);