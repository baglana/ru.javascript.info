// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// 1. Используя оператор ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// 2. Используя оператор ||
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}