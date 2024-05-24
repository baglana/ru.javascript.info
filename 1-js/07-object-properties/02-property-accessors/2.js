function sum(a) {
  closure.toString = function () {
    return a;
  };

  function closure(b) {
    a += b;
    return closure;
  }

  return closure;
}

console.log(1 + sum(1));

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);