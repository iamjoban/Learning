//https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let largestCollection = 0;
  let start = 0;
  let length = height.length;
  let end = length - 1;
  while (start < end) {
    largestCollection = Math.max(largestCollection, (end - start) * Math.min(height[start], height[end]));
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return largestCollection;
};


