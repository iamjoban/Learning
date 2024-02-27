/*
Maximum number of partitions that can be sorted individually to make sorted

Input : arr[] = [2, 1, 0, 3]
Output : 2
If divide arr[] into two partitions
{2, 1, 0} and {3}, sort then and concatenate
then, we get the whole array sorted.

Input : arr[] = [2, 1, 0, 3, 4, 5]
Output : 4
The maximum number of partitions are four, we
get these partitions as {2, 1, 0}, {3}, {4} 
and {5}
*/

function findTotalPartitions(ary) {
  let max = 0;
  let partitions = 0;
  for (let i = 0; i < ary.length; i++) {
    max = Math.max(max, ary[i]);
    if (max === i) {
      partitions++;
    }
  }
  return partitions;
}

let ary = [2, 1, 0, 3];
console.log(findTotalPartitions(ary));
