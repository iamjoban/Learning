function operatorWeight(operator) {
  switch (operator) {
    case "^":
      return 3;
    case "/":
    case "*":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return -1;
  }
}

function isOperand(char) {
  char = char.toLowerCase();

  return (char >= 0 && char <= 9) || (char >= "a" && char <= "z");
}

function infixToPostfix(exp) {
  let result = "";
  const stack = [];
  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];
    if (isOperand(char)) {
      result += char;
    } else if (char === ")") {
      stack.push(char);
    } else if (char === "(") {
      while (stack[stack.length - 1] !== ")") {
        result += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        operatorWeight(char) <= operatorWeight(stack[stack.length - 1])
      ) {
        result += stack.pop();
      }
      stack.push(char);
    }
  }

  while (stack.length) {
    result += stack.pop();
  }

  return result;
}

function infixToPrefix(exp) {
  const revExp = exp.split("").reverse().join("");
  for (let i = 0; i < revExp.length; i++) {
    if (revExp[i] === "(") {
      revExp[i] = ")";
    }
    if (revExp[i] === ")") {
      revExp[i] = "(";
    }
  }
  console.log(revExp);
  const results = infixToPostfix(revExp);
  console.log(results);
  return results.split("").reverse().join("");
}

let exp = "A*(B+C)";
console.log(infixToPrefix(exp));
