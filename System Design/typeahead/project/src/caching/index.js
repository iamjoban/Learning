const cache = {};
function memo(fn, context) {
  return (term) => {
    if (cache[term]) {
      console.log("Serving from Cache");
      return cache[term];
    }
    console.log("Serving from API");
    cache[term] = fn.call(context, term);
    return cache[term];
  };
}
