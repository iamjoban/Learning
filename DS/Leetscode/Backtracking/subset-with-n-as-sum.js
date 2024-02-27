var subsetsWithDup = function (nums, sum) {
  const subSet = [];
  const map = {};
  const finalResults = [];
  backTracking(nums, subSet, map, 0, finalResults, sum);
  console.log(finalResults);
  console.log(map);
};

const isValid = (map, subSet, num, sum) => {
  const clone = [...subSet, num];
  let currentSum = 0;
  clone.map((a) => {
    currentSum = currentSum + a;
  });

  return currentSum <= sum;
};

function backTracking(nums, subSet, map, index, finalResults, sum) {
  if (index > nums.length) {
    return;
  }

  let s = 0;
  subSet.map((a) => {
    s = s + a;
  });

  if (s === sum) {
    finalResults.push([...subSet]);
  }

  for (let i = index; i < nums.length; i++) {
    if (isValid(map, subSet, nums[i], sum)) {
      subSet.push(nums[i]);
      backTracking(nums, subSet, map, i + 1, finalResults, sum);
      subSet.pop();
    }
  }
}

const ary = [1, 2, 3];

subsetsWithDup(ary, 4);
