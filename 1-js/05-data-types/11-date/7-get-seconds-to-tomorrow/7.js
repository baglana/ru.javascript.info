function getSecondsToTomorrow() {
  const now = new Date();

  // now.setHours(23, 0, 0);

  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );

  const diff = tomorrow - now;

  return Math.ceil(diff / 1000);
}

function getSecondsToTomorrow2() {
  const now = new Date();

  // now.setHours(23, 0, 0, 0);

  return (
    24 * 3600 -
    (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds())
  );
}

console.log(getSecondsToTomorrow()); // == 3600
console.log(getSecondsToTomorrow2()); // == 3600
