//Print words of a string in reverse order

function reverseStringWord(str) {
  let end = str.length - 1;
  let start = 0;
  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  return str.join(" ");
}

let str = "I AM A GEEK";
console.log(reverseStringWord(str.split(" ")));
