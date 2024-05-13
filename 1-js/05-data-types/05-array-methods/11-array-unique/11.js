function unique(arr) {
  const uniques = [];

  arr.forEach((el) => {
    if (!uniques.includes(el)) {
      uniques.push(el);
    }
  });

  return uniques;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings)); // кришна, харе, :-O
