function debounce(f, ms) {
  let timerId;

  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      f.apply(this, arguments);
    }, ms);
  };
}

let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);
