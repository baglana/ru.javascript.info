function getSecondsToday() {
  const now = new Date();
  // now.setHours(10, 0, 0);

  return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}

console.log(getSecondsToday()); // == 36000 // (3600 * 10)
