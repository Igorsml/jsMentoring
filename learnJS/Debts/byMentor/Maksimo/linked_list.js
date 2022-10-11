"use strict";

// singly linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: null } } }
// add item
list = { value: "New item", next: list };
console.log(list); //  { value: 'New item',next: { value: 1, next: { value: 2, next: [Object] } }}

// doubly linked list
let list2 = {
  previous: null,
  value: 1,
  next: {
    // previous:
    value: 2,
    tail: {
      // previous:
      value: 3,
      next: null,
    },
  },
};

console.log(list2);
