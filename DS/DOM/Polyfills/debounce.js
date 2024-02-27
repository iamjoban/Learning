function debounce(fun, time) {
  let timeout = null;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fun(...args)
    }, time);
  }
}


function makeApiCall() {
  console.log('Making call to API');
}

let makeApiCallWithDebounce = debounce(makeApiCall, 500);

makeApiCallWithDebounce();
makeApiCallWithDebounce();
makeApiCallWithDebounce();