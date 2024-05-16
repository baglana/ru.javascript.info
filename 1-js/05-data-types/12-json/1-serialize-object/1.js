let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user);
const parsedUser = JSON.parse(json);


console.log(json);

console.log(parsedUser);
console.log(user);