const isOperator = (char) => {
  switch (char) {
    case "^":
    case "/":
    case "*":
    case "+":
    case "-":
      return true;
    default:
      return false;
  }
};

function convert(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isOperator(char)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const temp = `${char}${operand2}${operand1}`;
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }

  return stack[stack.length - 1];
}

let exp = "ABC/-AK/L-*";

convert(exp);
