function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = `${str.slice(0, maxlength - '…'.length)}…`;
  }

  return str;
}

console.log(
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ==
    "Вот, что мне хотело…",

  truncate("Всем привет!", 20) == "Всем привет!"
);
