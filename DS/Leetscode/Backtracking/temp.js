// Subset sum with DP -> print total number of possible way to get sum
// Subset sum with backtracking -> print all combinations
// Solve other DP problems

// var coins = [1, 2, 3];
// var n = coins.length;
// document.write(count(coins, n, 4));

// function count(coins, n, sum) {
//   if (sum === 0) {
//     return 1;
//   }

//   if (sum < 0) {
//     return 0;
//   }

//   if (n <= 0) {
//     return 0;
//   }

//   return count(coins, n, sum - coins[n - 1]) + count(coins, n - 1, sum);
// }

function longestValidParentheses(str) {
  const stack = [-1];
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const chr = str[i];
    if (chr === "(") {
      stack.unshift(i);
    } else {
      if (stack.length !== 0) {
        stack.shift();
      }
      if (stack.length !== 0) {
        max = Mat.max(max, i - stack[0]);
      } else {
        stack.unshift(i);
      }
    }
  }

  return max;
}

longestValidParentheses;
