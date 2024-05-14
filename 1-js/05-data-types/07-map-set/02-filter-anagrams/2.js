function aclean(arr) {
  const clean = new Map();

  for (const str of arr) {
    const sortedLower = getSorted(str.toLowerCase());

    // if (clean.has(sortedLower)) {
    //   continue;
    // }

    clean.set(sortedLower, str);
  }

  return Array.from(clean.values());
}

function getSorted(str) {
  return str.split('').sort().join('');
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"