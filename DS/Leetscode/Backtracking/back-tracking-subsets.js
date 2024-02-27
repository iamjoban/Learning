var subsetsWithDup = function (nums) {
  const subSet = [];
  const map = {};
  const finalResults = [[]];
  backTracking(nums, subSet, map, 0, finalResults);
  console.log(finalResults);
  console.log(map);
};

const isValid = (map, subSet, num) => {
  const clone = [...subSet, num];
  const key = clone.sort((a, b) => a - b).join(",");
  const result = !map[key];
  map[key] = true;

  return result;
};

function backTracking(nums, subSet, map, index, finalResults) {
  if (index > nums.length) {
    return;
  }

  for (let i = index; i < nums.length; i++) {
    if (isValid(map, subSet, nums[i])) {
      finalResults.push([...subSet, nums[i]]);
      subSet.push(nums[i]);
      backTracking(nums, subSet, map, i + 1, finalResults);
      subSet.pop();
    }
  }
}

const ary = [1, 2, 2];

subsetsWithDup(ary);
