function descending(a, b) {
  return b - a;
}

let arr = [5, 2, 1, -10, 8];

arr.sort(descending);

console.log( arr ); // 8, 5, 2, 1, -10
