// Brute  force

function findLongestPalindromWithBruteForcee(str) {
  let preString = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      const subStr = str.substr(i, i + j)
      const revStr = subStr.split('').reverse().join('');
      if (subStr === revStr) {
        if (subStr.length > preString.length) {
          preString = subStr;
        }
      }
    }
  }
  console.log(preString);
}

let str = "forgeeksskeegfor";
let temp = findLongestPalindromWithBruteForcee(str);

//----------------------------------------------------------------------------
//Best sollution - o(n)
function checkIfPalindrom(str, start, end) {
  let flag = 1;
  let s = start;
  let e = end;
  while (start <= end) {
    if (str[start] != str[end]) {
      flag = 0;
      break;
    }
    start++;
    end--;
  }

  if (flag === 1) {
    return str.substr(s, e - s + 1);
  }
}

function findLongestPalindromWithMap(str) {
  const map = new Map();
  let ansString = '';
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], i);
  }

  for (let i = 0; i < str.length; i++) {
    let ans = checkIfPalindrom(str, i, map.get(str[i]))
    if (ans) {
      if (ans.length > ansString.length) {
        ansString = ans;
      }
    }

  }
  return ansString;
}

let input = "abcca";
let res = findLongestPalindromWithMap(input);
console.log(res, 'ss')

//----------------------------------------------------------------------------

function expandINBothDirections(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

function findLongestPalindrom(str) {
  let start = 0,
    end = 0;
  for (let i = 0; i < str.length; i++) {
    let length1 = expandINBothDirections(str, i, i);
    let length2 = expandINBothDirections(str, i, i + 1);
    let maxLength = Math.max(length1, length2);

    if (maxLength > end - start) {
      let floor = Math.floor(maxLength / 2);

      start = Math.abs(i - Math.floor((maxLength - 1) / 2));
      end = Math.abs(i + floor);
    }
  }

  return str.substring(start, end + 1);
}

let str1 = "ababbaabb";
let temp1 = findLongestPalindrom(str1);
console.log(temp1);
//---------------------------------------------------------------------------------
