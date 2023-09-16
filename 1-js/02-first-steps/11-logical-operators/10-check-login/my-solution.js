const login = prompt("Кто там?", '');

if (login === "Админ") {

  const passwd = prompt("Пароль?", '');

  if (passwd === "Я главный") {
    alert("Здравствуйте");
  } else if (passwd) {
    alert("Я вас не знаю");
  } else {
    alert("Отменено");
  }
  
} else if (login) {
  alert("Я вас не знаю");
} else {
  alert("Отменено");
}