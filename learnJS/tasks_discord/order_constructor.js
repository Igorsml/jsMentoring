"use strict";

const item1 = {
  name: "Suppserf",
  price: 16000,
};

const item2 = {
  name: "Oculus Rift S",
  price: 89900,
};

function Order() {
  this.count = 0;
  this.sum = 0;
  this.shoppingList = {};
  this.listPrice = Object.values(this.shoppingList);
  this.sumShoppingListItems = {};
  this.isLocked = false;
  const currency = "₽";

  this.addItem = function (item) {
    if (this.isLocked) {
      console.log("You can't add item");
      return;
    }
    // добавить итем в чек (+ имя +цена)
    this.shoppingList[item.name] = item.price;
    this.count = item.name ? (this.count += 1) : 0;
    this.sumShoppingListItems[item.name] =
      (this.sumShoppingListItems[item.name] || 0) + 1;
  };

  this.removeItem = function (item, deleteCount) {
    // Нельзя убрать больше чем было в чеке
    if (this.isLocked || this.sumShoppingListItems[item.name] < deleteCount) {
      console.log("You can't delete items more then is in check");
      return;
    }

    // убрать из чека count итемов (если не указано сколько - убрать все)
    if (!deleteCount || typeof deleteCount !== "number") {
      delete this.shoppingList[item.name];
      this.sumShoppingListItems[item.name] = 0;
    } else {
      this.sumShoppingListItems[item.name] -= deleteCount;
      this.count -= deleteCount;
    }
  };

  // Получить сумму заказа
  this.getSum = function () {
    let countItems = [];
    let priceItems = [];

    for (const value in this.sumShoppingListItems) {
      countItems.push(this.sumShoppingListItems[value]);
      priceItems.push(this.shoppingList[value]);
    }

    this.sum = countItems.reduce(
      (acc, currentValue, index) => acc + currentValue * priceItems[index],
      0
    );
  };
  this.getSum();

  // получить информацию сколько каких итемов в чеке,
  // общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
  this.getCheck = function () {
    function replacer(key, value) {
      let a = key;
      let b = value;
      console.log(`${a}: ${b}${currency}`);
      return a, b;
    }
    function replacerItem(key, value) {
      let a = key;
      let b = value;
      console.log(`${a}: ${b} pc`);
      return a, b;
    }

    console.log("======== Big check === big dick ========");
    JSON.stringify(this.shoppingList, replacer);
    JSON.stringify(this.sumShoppingListItems, replacerItem);
    console.log("================================");
    console.log(`Order quantity: ${this.count} pcs`);
    console.log(`Order sum: ${this.sum}${currency}`);
  };

  this.lockOrder = function () {
    this.isLocked = true;
    console.log("Oops, looks like order is locked");
  };

  this.unlockOrder = function () {
    this.isLocked = false;
    // убрать блокировку заказа - снова можно добавлять итемы
  };
}

const order = new Order(item1);
order.addItem(item1); // add 'Suppserf' 1 pc
order.addItem(item2); // add 'Oculus Rift S' 1 pc
order.addItem(item1); // add 'Suppserf' 1 pc
// order.removeItem(item1, 1); // remove 'Suppserf' 1 pc
// order.removeItem(item1); // clear all item
// order.removeItem(item1, 1); // remove add 'Suppserf' 1 pc
// order.removeItem(item1, 1); // You can't delete items more then is in check
// order.lockOrder(); // Oops, looks like order is locked
// order.addItem(item1); // You can't add item
// order.unlockOrder(); //
// order.addItem(item1); // add 'Suppserf' 1 pc
order.getCheck();
// console.log(order);

/* [Конструктор заказа. Основы. learnjs 1.1..1.4]
1. написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, count) - добавить итем в чек (+ имя + цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы
Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке
3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов 
Формат item - объект с 1. названием итема 2. ценой за штуку.
2 итема с одинаковым именем считаем одной позицией в чеке*/
