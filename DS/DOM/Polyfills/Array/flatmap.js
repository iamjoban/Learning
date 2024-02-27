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

function flatMap(handler, thisArg) {
  const self = this;
  const res = [];
  for (let i = 0; i < self.length; i++) {
    res[i] = handler(self[i], i, self)
  }
  return flatten(res, 1);
}

const arr = [1, 2, [3, 4, [5, [6, [7]]]]];
const x = arr.flatMap((value, index) => {
  if (Array.isArray(value)) {
    return value;
  }
  return value * 2;
});
console.log(x)