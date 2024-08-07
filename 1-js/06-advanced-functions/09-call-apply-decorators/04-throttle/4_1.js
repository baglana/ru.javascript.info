function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

// Wrote incorrectly and corrected after looked at solution

function throttle(f, ms) {
  let savedArgs, savedThis;
  let throttle = false;

  return function wrapper() {
    savedArgs = arguments;
    savedThis = this;

    if (!throttle) {
      throttle = true;

      setTimeout(() => {
        throttle = false;
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);

      return f.apply(this, arguments);
    }
  };
}
