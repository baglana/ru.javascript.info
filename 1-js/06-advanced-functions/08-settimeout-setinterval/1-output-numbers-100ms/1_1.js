function printNumbers(from, to) {
  const timerId = setInterval(() => {       
      console.log(from++);

      if (from > to) {
        clearInterval(timerId);
      }
  }, 1000);
}

function printNumbers(from, to) {
  setTimeout(function print() {       
      console.log(from++);

      if (from <= to) {
          setTimeout(print, 1000);
      }
  }, 1000);
}

printNumbers(1, 3);