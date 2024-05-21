let users = [
  { name: "Иван", age: 20, surname: "Иванов" },
  { name: "Пётр", age: 18, surname: "Петров" },
  { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(field) {
  return function(a, b) {
    return (a[field] > b[field]) ? 1 : -1;
  }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));