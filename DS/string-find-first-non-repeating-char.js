function findFirstNonRepeatingChar(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return "Non of char is unique";
}

let str = "abcdeabcd";
console.log(findFirstNonRepeatingChar(str));
