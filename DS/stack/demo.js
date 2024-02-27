function isOperator(char) {
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
}

function prefixToPostfix(exp) {
  const stack = [];
  for (let i = exp.length - 1; i >= 0; i--) {
    const char = exp[i];
    if (isOperator(char)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      const newExp = `${operand2}${operand1}${char}`;
      stack.push(newExp);
    } else {
      stack.push(char);
    }
  }

  return stack[stack.length - 1];
}

const exp = "+*abc";

console.log(prefixToPostfix(exp));
