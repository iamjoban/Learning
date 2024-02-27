var multiply = function (num1, num2) {
  if (num2 === "0" || num1 === "0") {
    return "0";
  }
  let end2 = num2.length - 1;
  let end1 = num1.length - 1;
  let ans = [];

  for (let i = end2; i >= 0; i--) {
    let carry = 0;
    for (let j = end1; j >= 0; j--) {
      //  console.log(end2, end1)
      let index = i + j + 1;
      let multi = num1[j] * num2[i] + (ans[index] || 0);
      let temp = multi + carry;
      ans[index] = temp % 10;
      carry = parseInt(temp / 10);
    }
    if (carry > 0) {
      ans[i] = (ans[i] || 0) + carry;
    }
  }

  return ans.join('');
}

console.log(multiply("123456789", "987654321"))
