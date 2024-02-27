Array.prototype.myMap = function (handler) {
  const self = this;
  const newAry = [];
  for (let i = 0; i < self.length; i++) {
    newAry[i] = handler(self[i], i);
  }

  return newAry;
}

const ary = [1, 2, 3, 4, 5];

const old = ary.map((val, i) => {
  return val * i * 2;
});
console.log(old);

const newAry = ary.myMap((val, i) => {
  return val * i * 2;
});

console.log(newAry);
