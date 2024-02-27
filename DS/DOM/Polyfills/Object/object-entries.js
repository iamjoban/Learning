class MyIterator {
  constructor(data) {
    this.data = data;
  }

  [Symbol.iterator] = function () {
    let index = 0;
    let keys = Object.keys(this.data);

    return {
      next: function () {
        const key = keys[index];
        const value = this.data[key];
        return {
          value: [index++, value],
          done: index > keys.length,
        };
      },
    };
  };
}

Object.prototype.entries = function () {
  const self = this;
  //This should return an iterator object
  return new MyIterator(self);
};

let obj = { a: "a", b: "b" };
const entries = obj.entries();
console.log(entries);
