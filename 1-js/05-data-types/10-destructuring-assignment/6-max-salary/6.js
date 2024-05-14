let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (Object.entries(salaries).length === 0) {
    return null;
  }

  return Object.entries(salaries).reduce(
    ([topName, topSalary], [name, salary]) => {
      return salary > topSalary ? [name, salary] : [topName, topSalary];
    }
  )[0];
}

console.log(topSalary(salaries));
