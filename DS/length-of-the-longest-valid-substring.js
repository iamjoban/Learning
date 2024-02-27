function findMaxLen(str) {
  let stack = [-1];
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.unshift(i);
    } else {
      let isEmpty = stack.length === 0;
      if (!isEmpty) {
        stack.shift();
      }

      if (!isEmpty) {
        result = Math.max(result, i - stack[0]);
      } else {
        stack.unshift(i);
      }
    }
  }

  console.log(result);
}

let str = "(((())";
findMaxLen(str);
