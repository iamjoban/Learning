function withoutRepeatingChar(str) {
  const map = new Map();
  let start = 0;
  let end = 0, startIndex = 0;
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.get(char) || map.get(char) === 0) {
      start = map.get(char) + 1;
    }
    map.set(char, i);
    let l = i - start + 1;
    if (l > length) {
      length = l;
      startIndex = start
    }

  }
  console.log(length, startIndex);
  console.log(str.substr(startIndex, length));
}

let str = "joaban";
console.log(withoutRepeatingChar(str));