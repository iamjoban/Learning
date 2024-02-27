Array.prototype.reverse = function () {
  const self = this;
  let end = self.length - 1;
  let start = 0;
  console.log(self[end])
  while (start < end) {
    let temp = self[start];
    self[start] = self[end];
    self[end] = temp;
    start++;
    end--;
  }
  return self;
}
let ary = [10, 21, 3];
console.log(ary.reverse())