const cache = [0, 1, 1];

function fibRecursive(n) {
  return cache[n] ?? (fib(n - 1) + fib(n - 2));  
}

function fib(n) {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
}

console.log(fib(3), fibRecursive(3));
console.log(fib(7), fibRecursive(7));
console.log(fib(77), fibRecursive(77));