"use strict";

// Class linked list
class LinkedList {
  constructor() {
    this.head = null;
  }

  get size() {
    return this.nodes.length;
  }

  get head() {
    return this.size ? this.nodes[0] : null;
  }

  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode };

    if (previousNode) previousNode.next = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }

  insertLast(value) {
    this.insertAt(this.size, value);
  }

  getAt(index) {
    return this.nodes[index];
  }

  removeAt(index) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    if (previousNode) previousNode.next = nextNode;

    return this.nodes.splice(index, 1);
  }

  clear() {
    this.nodes = [];
  }

  reverse() {
    this.nodes = this.nodes.reduce(
      (acc, { value }) => [{ value, next: acc[0] || null }, ...acc],
      []
    );
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const list3 = new LinkedList();

list3.insertFirst(3);
list3.insertFirst(2);
list3.insertFirst(1);

console.log(list3.size); // 3
console.log(list3.head.value); // 1
console.log(list3.head.next.value); // 2
console.log(list3.tail.value); // 3

console.log(list3.removeAt(1)); // [ { value: 2, next: { value: 3, next: null } } ]
console.log(list3.getAt(1).value); // 3
console.log(list3.head.next.value); // 2

list3.reverse(); // [ { value: 3, next: [Object] }, { value: 1, next: null } ]
list3.clear();
console.log(list3.size); // 0

// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

// // singly linked list
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: null,
//     },
//   },
// };

// console.log(list); // { value: 1, next: { value: 2, next: { value: 3, next: null } } }
// // add item
// list = { value: "New item", next: list };
// console.log(list); //  { value: 'New item',next: { value: 1, next: { value: 2, next: [Object] } }}

// // doubly linked list
// let list2 = {
//   previous: null,
//   value: 1,
//   next: {
//     value: 2,
//     tail: {
//       value: 3,
//       next: null,
//     },
//   },
// };

// list2.next.previous = list2;
// list2.next.tail.previous = list2.next;

// console.log(list2);

// // function linked list
// function createList(...o) {
//   for (let i = 0; i < o.length; i += 1) {
//     o[i].previous = o[i - 1] ?? null;
//     o[i].next = o[i + 1] ?? null;
//   }
//   return o[0];
// }
// let list = createList({ value: 1 }, { value: 2 }, { value: 3 });
// console.log(list); //
