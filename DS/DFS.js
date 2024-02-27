function _generateParenthesis(ary, length, open, close, str) {
  if (open === length && close === length) {
    ary.push(str);
  }
  if (open < length) {
    _generateParenthesis(ary, length, open + 1, close, str + '(')
  }
  if (close < open) {
    _generateParenthesis(ary, length, open, close + 1, str + ')')
  }
}
let ary = [];
let length = 3;
_generateParenthesis(ary, length, 0, 0, '')
for (let val of ary) {
  console.log(val);
}