let memo = (() => {
  const trakker = {};
  return (fn, args) => {
    let key = args.join(',');
    if (!trakker[key]) {
      trakker[key] = fn(...args);
    }
    return trakker[key];
  }
})();


function add(a, b) {
  console.log('calling orriginal...');
  return a + b;
}

console.log(memo(add, [10, 20]));

console.log(memo(add, [30, 40]));

console.log(memo(add, [10, 20]));