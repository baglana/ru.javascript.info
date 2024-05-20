// 1. С использованием цикла.
function sumToIterative(n) {
  let sum = 0;

  for (let i = n; i >= 1; i--) {
    sum += i;
  }

  return sum;
}

// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumToRecursive(n) {
  console.log(n);
  return (n <= 1) ? 1 : n + sumToRecursive(n - 1);
}

// 3. С использованием формулы арифметической прогрессии.
function sumToFormula(n) {
  return n * (1 + n) / 2;
}

console.log(sumToIterative(100000));

function logSums(cb, N = 100) {
  for (let n = 1; n <= N; n++) {
    console.log(n, cb(n));
  }  
}