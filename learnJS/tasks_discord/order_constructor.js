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
  this.qty = 0;
  this.sumDiscount = 0;
  this.shoppingList = {};
  this.itemCount = {};
  this.isLocked = false;
  this.discount = 10;
  const currency = "₽";

  this.addItem = function (item) {
    if (this.isLocked) {
      console.log("You can't add item");
      return;
    }
    // добавить итем в чек (+ имя +цена)
    this.shoppingList[item.name] = item.price;
    this.count = item.name ? (this.count += 1) : 0;
    this.itemCount[item.name] = (this.itemCount[item.name] || 0) + 1;
    this.sum += this.shoppingList[item.name];
  };

  this.removeItem = function (item, deleteCount) {
    // Нельзя убрать больше чем было в чеке
    if (this.isLocked || this.itemCount[item.name] < deleteCount) {
      console.log("You can't delete items more then is in check");
      return;
    }

    // убрать из чека count итемов (если не указано сколько - убрать все)
    if (!deleteCount || typeof deleteCount !== "number") {
      this.shoppingList = [];
      this.itemCount[item.name] = 0;
      this.sum = 0;
    } else {
      this.itemCount[item.name] -= deleteCount;
      this.count -= deleteCount;
      this.sum - this.shoppingList[item.name];
    }
  };

  // получить информацию сколько каких итемов в чеке,
  // общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
  this.getCheck = function () {
    console.log("======== Big check === big dick ========");
    for (const [key, value] of Object.entries(this.shoppingList)) {
      const name = key;
      this.discountLeft = this.sum - 100000;
      this.qty = this.itemCount[key];
      this.qtySum = this.qty * this.shoppingList[key];
      if (this.qty >= 1)
        console.log(`x${this.qty} ${name} = ${this.qtySum}${currency}`);
    }
    console.log("================================");
    if (this.sum > 100000) {
      this.sumDiscount = this.sum / this.discount;
      this.sum -= this.sumDiscount;
      console.log(
        `Your discount is ${this.discount}% (${this.sumDiscount}${currency})`
      );
    } else {
      console.log(`For discount left ${this.discountLeft}`);
      return;
    }

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
Формат item - объект с 
1. названием итема 
2. ценой за штуку. 
2 итема с одинаковым именем считаем одной позицией в чеке
3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов 
*/
