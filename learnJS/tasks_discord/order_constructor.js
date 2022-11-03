"use strict";

const item1 = {
  name: "Suppserf",
  price: 16000,
};

const item2 = {
  name: "Oculus Rift S",
  price: 89900,
};

class Order {
  #count = 0;
  #sum = 0;
  #qty = 0;
  #qtySum = 0;
  #sumDiscount = 0;
  #shoppingList = { name: "", price: 1 };
  #itemCount = {};
  #isLocked = false;
  // размер скидки 10% при достижении суммы заказа 100 000₽
  #discount = 10;
  #discountLeft = 0;
  #currency = "₽";

  addItem(item) {
    if (this.#isLocked) {
      console.log("You can't add item");
      return;
    }
    // добавить итем в чек (+ имя +цена)
    this.#shoppingList[item.name] = item.price;
    this.#count = item.name ? (this.#count += 1) : 0;
    this.#itemCount[item.name] = (this.#itemCount[item.name] || 0) + 1;
    this.#sum += this.#shoppingList[item.name];
  }

  removeItem(item, deleteCount) {
    // Нельзя убрать больше чем было в чеке
    if (this.#isLocked || this.#itemCount[item.name] < deleteCount) {
      console.log("You can't delete items more then is in check");
      return;
    }

    // убрать из чека this.#count итемов (если не указано сколько - убрать все)
    if (!deleteCount || typeof deleteCount !== "number") {
      this.#shoppingList = [];
      this.#itemCount[item.name] = 0;
      this.#sum = 0;
      this.#count = 0;
    } else {
      this.#itemCount[item.name] -= deleteCount;
      this.#count -= deleteCount;
      this.#sum -= this.#shoppingList[item.name];
    }
  }

  // получить информацию сколько каких итемов в чеке,
  // общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
  getCheck() {
    console.log("======== Big check === big dick ========");
    for (const [key, value] of Object.entries(this.#shoppingList)) {
      const name = key;
      this.#discountLeft = this.#sum - 100000;
      this.#qty = this.#itemCount[key];
      this.#qtySum = this.#qty * this.#shoppingList[key];
      if (this.#qty >= 1)
        console.log(`x${this.#qty} ${name} = ${this.#qtySum}${this.#currency}`);
    }
    console.log("================================");
    if (this.#sum > 100000) {
      this.#sumDiscount = this.#sum / this.#discount;
      this.#sum -= this.#sumDiscount;
      console.log(
        `Your discount is ${this.#discount}% (${this.#sumDiscount}${
          this.#currency
        })`
      );
    } else {
      console.log(`For discount left ${this.#discountLeft}${this.#currency}`);
      console.log(`Order sum is: ${this.#sum}${this.#currency}`);
      console.log(`Order quantity: ${this.#count} pcs`);
      return;
    }

    console.log(`Order sum is: ${this.#sum}${this.#currency}`);
  }

  lockOrder() {
    this.#isLocked = true;
    console.log("Oops, looks like order is locked");
  }

  unlockOrder() {
    this.#isLocked = false;
    console.log("Order is unlocked");
    // убрать блокировку заказа - снова можно добавлять итемы
  }
}

const order = new Order(item1);
order.addItem(item1); // add 'Suppserf' 1 pc, 16000₽
// order.addItem({ name: "Suppserf", price: 2 }); // add 'Oculus Rift S' 1 pc
order.addItem(item2); // add 'Oculus Rift S' 1 pc
// order.addItem({ name: "Oculus Rift S", price: 1 }); // add 'Oculus Rift S' 1 pc
// order.addItem(item1); // add 'Suppserf' 1 pc
order.removeItem(item1, 1); // remove 'Suppserf' 1 pc
// order.removeItem(item1); // clear all item
// order.removeItem(item1, 1); // remove add 'Suppserf' 1 pc
// order.removeItem(item1, 1); // You can't delete items more then is in check
// order.lockOrder(); // Oops, looks like order is locked
// order.addItem(item1); // You can't add item
// order.unlockOrder(); //
// order.addItem(item1); // add 'Suppserf' 1 pc
order.getCheck();

/* [Конструктор заказа. Основы. learnjs 1.1..1.4]
1. написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, this.#count) - добавить итем в чек (+ имя + цена)
removeItem(item, this.#count) - убрать из чека this.#count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы
Формат item - объект с 
1. названием итема 
2. ценой за штуку. 
2 итема с одинаковым именем считаем одной позицией в чеке
3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов 
*/
