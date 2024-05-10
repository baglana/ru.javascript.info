function multiplyNumeric(obj) {
  for (const prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
}

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};