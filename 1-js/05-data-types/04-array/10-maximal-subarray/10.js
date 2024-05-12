function getMaxSubSum(arr) {
  let maxSubSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;

    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSubSum = Math.max(maxSubSum, subSum);
    }
  }

  return maxSubSum;
}

function getMaxSubSumOn(arr) {
  let maxSubSum = 0;
  let subSum = 0;

  for (const item of arr) {
    // if (subSum + item > 0) {
    //    subSum += item;
    // } else {
    //   subSum = 0;
    // }

    subSum = Math.max(item, subSum + item);
    maxSubSum = Math.max(maxSubSum, subSum);

    console.log(`item: ${item}, subSum: ${subSum}, maxSS: ${maxSubSum}`);
  }

  return maxSubSum;
}

const arr = [1, -2, 3, 4, -9, 6];

// console.log(getMaxSubSumOn([-1, 2, 3, -9])); // == 5 (сумма выделенных элементов)
console.log(getMaxSubSumOn([2, -1, 2, 3, -9])); // == 6
// console.log(getMaxSubSumOn([-1, 2, 3, -9, 11])); // == 11
// console.log(getMaxSubSumOn([-2, -1, 1, 2])); // == 3
// console.log(getMaxSubSumOn([100, -9, 2, -3, 5])); // == 100
// console.log(getMaxSubSumOn([1, 2, 3])); // == 6 (берём все)
// console.log(getMaxSubSumOn([-1, -2, -3])); // = 0
