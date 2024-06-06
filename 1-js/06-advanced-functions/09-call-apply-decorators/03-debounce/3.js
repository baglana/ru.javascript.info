let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

function debounce(f, ms) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => f.apply(this, arguments), ms);
  };
}
