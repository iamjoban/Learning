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
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (isOperator(char)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const temp = `(${operand1}${char}${operand2})`;
      stack.push(temp);
    } else {
      stack.push(char);
    }
  }

  return stack[stack.length - 1];
}

let exp = "*-A/BC-/AKL";

convert(exp);
