function formatDate(date) {
  const diff = Date.now() - date;

  if (diff < 1000) {
    return "прямо сейчас";
  }

  if (diff < 1000 * 60) {
    return `${Math.round(diff / 1000)} сек. назад`;
  }

  if (diff < 1000 * 60 * 60) {
    return `${Math.round(diff / 1000 / 60)} мин. назад`;
  }

  const DD = date.getDate().toString().padStart(2, 0);
  const MM = (date.getMonth() + 1).toString().padStart(2, 0);
  const YY = date.getFullYear() % 100;
  const  HH = date.getHours().toString().padStart(2, 0);
  const mm = date.getMinutes().toString().padStart(2, 0);

  return `${DD}.${MM}.${YY} ${HH}:${mm}`;
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
