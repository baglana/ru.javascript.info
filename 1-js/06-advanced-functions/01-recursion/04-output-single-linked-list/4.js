function printListRecursive(list) {
  if (list) {
    console.log(list.value);
    printListRecursive(list?.next);
  }
}

function printListIterative(list) {
  let tmp = list;
  
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
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