//Print words of a string in reverse order

function reverseStringWord(str) {
  let end = str.length - 1;
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " || i == 0) {
      if (i == 0) {
        newStr += " ";
      }
      newStr += str.substring(i, end + 1);
      end = i - 1;
    }
  }
  console.log(newStr);
}

let str = "I AM A GEEK";
reverseStringWord(str);
