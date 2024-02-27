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

function postFixToInFix(exp) {
  const stack = [];
  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];
    if (isOperator(char)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      const newExp = `(${operand1}${char}${operand2})`;
      stack.push(newExp);
    } else {
      stack.push(char);
    }
  }

  return stack[stack.length - 1];
}

const exp = "ab*c+";

console.log(postFixToInFix(exp));
