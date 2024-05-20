function printListRecursive(list) {
  if (list) {
    printListRecursive(list?.next);
    console.log(list.value);
  }
}

function printListIterative(list) {
  const values = [];  
  let tmp = list;
  while (tmp) {
    values.push(tmp.value);
    tmp = tmp.next;
  }
  values.reverse().forEach(v => console.log(v));
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListRecursive(list);
printListIterative(list);