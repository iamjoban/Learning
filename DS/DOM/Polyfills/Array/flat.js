function flatten(ary, depth = 1) {
  const stack = [...ary];
  const res = [];
  let currentDepth = 0;
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next) && currentDepth < depth) {
      currentDepth++;
      stack.push(...next);
    } else {
      res.unshift(next);
    }
  }

  return res;
}

const arr = [1, 2, [3, 4, [5, [6, [7]]]]];
flatten(arr, 2);