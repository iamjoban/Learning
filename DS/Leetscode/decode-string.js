/**
 * https://leetcode.com/problems/decode-string/

 * @param {string} s
 * @return {string}
 */
function decodeString(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const isNumber = !isNaN(parseInt(char, 10));
    if (isNumber) {
      const lastPushedEle = stack[stack.length - 1];
      const isLastPushedEleANumber = !isNaN(parseInt(lastPushedEle, 10));
      if (isLastPushedEleANumber) {
        stack[stack.length - 1] = parseInt(lastPushedEle + char, 10);
      } else {
        stack.push(parseInt(char, 10));
      }
    }

    if (char === "[") {
      stack.push(char);
    }
    if (char === "]") {
      let charString = "";
      while (true) {
        const charFromStack = stack.pop();
        if (charFromStack === "[") {
          break;
        }

        charString = charFromStack + charString;
      }

      const number = stack.pop();
      let count = 0;
      let finalStr = "";
      while (count < number) {
        finalStr += charString;
        count++;
      }
      stack.push(finalStr);
    }

    if (char >= "a" && char <= "z") {
      stack.push(char);
    }
  }

  return stack.join("");
}

const res = decodeString("3[a2[yz]]");
console.log(res);

/*
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "3[a2[c]]"
Output: "accaccacc"

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
*/
