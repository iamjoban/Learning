function throttle(fun, delay) {
  let timeout;
  const self = this;
  return (...args) => {
    if (!timeout) {
      fun.call(this, ...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  }
}

const newFun = throttle(fun, delay);