"use strict";

// Class linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // добавление в список первого элемента | O(1)
  insertFirst(value) {
    const newItem = new ListItem(value, this.head);
    this.head = newItem;
    if (!this.tail) {
      this.tail = newItem;
    }
    return this;
  }

  // вставляем в конец | O(1)
  insertLast(value) {
    // если итемов нет в списке
    const newItem = new ListItem(value);
    if (!this.head || !this.tail) {
      this.head = newItem;
      this.tail = newItem;

      return this;
    }

    // если итемы в списке были
    this.tail.next = newItem;
    this.tail = newItem;
    return this;
  }

  // вставить в конкретное место | O(n)
  insertAt(value, prevItem) {
    // ничего не добавляем, возвращаем список
    if (prevItem === null) {
      return this;
    }

    const newItem = new ListItem(value);
    newItem.next = prevItem.next;
    prevItem.next = newItem;

    if (newItem.next === null) {
      this.tail = newItem;
    }

    return this;
  }

  // ищем итем | O(n)
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentItem = this.head;

    while (currentItem) {
      if (currentItem.value === value) {
        return currentItem;
      }

      currentItem = currentItem.next;
    }

    return null;
  }

  // удаляем итем | O(n)
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedItem = null;
    while (this.head && this.head.value === value) {
      deletedItem = this.head;
      this.head = this.head.next;
    }
    let currentItem = this.head;

    if (currentItem !== null) {
      while (currentItem.next) {
        if (currentItem.next.value === value) {
          deletedItem = currentItem.next;
          currentItem.next = currentItem.next.next;
        } else {
          currentItem = currentItem.next;
        }
      }
    }

    // перезаписываем хвост на null если хвост удалится
    if (this.tail?.value === null) {
      this.tail = currentItem;
    }

    return deletedItem;
  }

  // O(n)
  toArray() {
    const Items = [];
    let currentItem = this.head;

    while (currentItem) {
      Items.push(currentItem);
      currentItem = currentItem.next;
    }
    return Items;
  }

  // O(n)
  toString() {
    return this.toArray()
      .map((Item) => Item.toString())
      .toString();
  }
}

class ListItem {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

module.exports = LinkedList;
