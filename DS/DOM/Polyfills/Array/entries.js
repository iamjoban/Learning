class MyIterator {
  constructor(data) {
    this.data = data;
  }
  [Symbol.iterator] = function () {
    let index = 0;
    let data = this.data;
    return {
      next: function () {
        return {
          done: index >= data.length,
          value: [index, data[index++]]
        }
      }
    }
  }
}



Array.prototype.entries = function () {
  return new MyIterator(this);
}

let ary = [1, 2, 4, 5]
let entries = ary.entries();
console.log(entries);
for (let [key, value] of entries) {
  console.log(key, value)
}