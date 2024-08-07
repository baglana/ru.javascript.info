function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

function spy(func) {
  wraper.calls = [];

  function wraper(...args) {
    wraper.calls.push(args);
    return func.apply(this, args);
  }

  return wraper;
}
