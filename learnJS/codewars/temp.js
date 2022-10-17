class LinkedList {
  constructor() {
    this.nodes = [];
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
