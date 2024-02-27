function printParenthesis(str, length, pos, open, close) {
  if (close === length) {
    console.log(str.join(''));
    return;
  } else {
    if (open > close) {
      str[pos] = ")";
      printParenthesis(str, length, pos + 1, open, close + 1);
    }
    if (open < length) {
      str[pos] = "(";
      printParenthesis(str, length, pos + 1, open + 1, close);
    }
  }
}

let n = 3;
printParenthesis([], n, 0, 0, 0);
