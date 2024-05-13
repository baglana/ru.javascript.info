function camelize(str) {
  return str
    .split("-")
    .map((word, index) => (index ? capitalize(word) : word))
    .join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(
  camelize("background-color") == "backgroundColor",
  camelize("background-color"),
  camelize("list-style-image") == "listStyleImage",
  camelize("list-style-image"),
  camelize("-webkit-transition") == "WebkitTransition",
  camelize("-webkit-transition")
);
