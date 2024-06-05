function printNumbers(from, to) {
  let n = from;

  function print() {
    console.log(n++);
    if (n > to) {
      clearInterval(intervalId);
    }
  }

  print();
  const intervalId = setInterval(print, 1000);
}

function printNumbersTimeout(from, to) {
  let n = from;

  setTimeout(function print() {
    console.log(n++);
    if (n <= to) {
      setTimeout(print, 1000);
    }
  }, 1000);
}

printNumbers(5, 10);
// printNumbersTimeout(0, 5);