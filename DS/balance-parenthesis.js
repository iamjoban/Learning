let openArray = ["[", "{", "("];
let closeArray = ["]", "}", ")"];

function findBalanceParenthesis(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (openArray.indexOf(str[i]) > -1) {
      stack.unshift(str[i]);
    } else {
      let pos = closeArray.indexOf(str[i]);
      let aryLength = stack.length;
      if (openArray[pos] === stack[0]) {
        stack.shift();
      } else {
        return "unbalance";
      }
    }
  }
  return stack.length === 0 ? "Balance" : "unbalance";
}

let res = findBalanceParenthesis("{(})");
console.log(res);
