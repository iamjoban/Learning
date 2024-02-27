const xx = { a: 'a', b: 'b' };
Object.prototype[Symbol.iterator] = function () {
  const self = this;
  console.log(self);
  const keys = Object.keys(self);
  let counter = 0;
  return {
    next: () => {
      return {
        value: self[keys[counter++]],
        done: counter <= keys.length ? false : true
      }
    }
  }
}

for (let x of xx) {
  console.log(x);
}