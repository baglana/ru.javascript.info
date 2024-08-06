function printNumbers(from, to) {
  const timerId = setInterval(() => {       
      console.log(from++);

      if (from > to) {
          clearInterval(timerId);
      }
  }, 1000);
}

function printNumbers(from, to) {
  let timerId = setTimeout(function print() {       
      console.log(from++);

      if (from <= to) {
          timerId = setTimeout(print, 1000);
      }
  }, 1000);
}

printNumbers(1, 3);