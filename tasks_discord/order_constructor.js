"use strict";

const item1 = {
  name: "Suppserf",
  price: 1,
};

const item2 = {
  name: "Oculus Rift S",
  price: 2,
};

class Order {
  #shoppingList = {};
  // Order
  get #orderQuantity() {
    return Object.values(this.#shoppingList).reduce((sum, item) => {
      return (sum += item.count);
    }, 0);
  }
  get #itemsTotal() {
    return Object.values(this.#shoppingList).reduce((sum, item) => {
      return (sum += item.price * item.count);
    }, 0);
  }
  get #orderSum() {
    return this.#itemsTotal > 100000
      ? this.#itemsTotal - (this.#itemsTotal / 100) * this.#discount
      : this.#itemsTotal;
  }
  get #sumDiscount() {
    return this.#itemsTotal > 100000
      ? (this.#itemsTotal / 100) * this.#discount
      : 0;
  }
  get #discountLeft() {
    // осталось добрать суммы заказа до 100 000₽
    return 100000 - this.#itemsTotal;
  }

  #isLocked = false;
  // размер скидки 10% при достижении суммы заказа 100 000₽
  #discount = 10;
  // валюта чека
  #currency = "₽";

  // добавляем в item имя, цена, кол-во итема
  addItem(item, count = 1) {
    if (this.#isLocked) {
      console.error("You can't add item");
      return;
    }
    const itemOldCount =
      this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`]?.count ||
      0;

    this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`] = {
      ...item,
      count: itemOldCount + count,
    };
  }

  removeItem(item, deleteCount) {
    if (this.#isLocked) {
      console.error("You can't remove items");
      return;
    }
    const itemOldCount =
      this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`].count;
    // Нельзя убрать больше чем было в чеке
    if (itemOldCount < deleteCount) {
      console.log("You don't have enough items to remove them");
      return;
    }

    // убрать из чека this.#count итемов (если не указано сколько - убрать все)
    if (!deleteCount || typeof deleteCount !== "number") {
      delete this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`];
      return;
    }

    this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`] = {
      ...item,
      count: itemOldCount - deleteCount,
    };
    if (
      this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`]
        ?.deleteCount === 0
    ) {
      delete this.#shoppingList[`${item.name.toUpperCase()}-${item.price}`];
    }
  }

  // получить информацию сколько каких итемов в чеке,
  // общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
  getCheck() {
    console.log("======== Big check === big dick ========");
    const itemsString = Object.values(this.#shoppingList)
      .map((item) => {
        return `x${item.count} ${item.name} = ${item.price * item.count}${
          this.#currency
        }`;
      })
      .join("\n");
    console.log(itemsString);

    console.log("================================");
    if (this.#orderSum > 100000) {
      console.log(
        `Your discount is ${this.#discount}% (${this.#sumDiscount}${
          this.#currency
        })`
      );
    } else {
      console.log(`For discount left ${this.#discountLeft}${this.#currency}`);
      console.log(`Order quantity: ${this.#orderQuantity} pcs`);
      console.log(`Order sum is: ${this.#orderSum}${this.#currency}`);
      return;
    }

    console.log(`Order quantity: ${this.#orderQuantity} pcs`);
    console.log(`Order sum is: ${this.#orderSum}${this.#currency}`);
  }

  lockOrder() {
    this.#isLocked = true;
  }

  unlockOrder() {
    this.#isLocked = false;
  }
}

const order = new Order(item1);

// добавляем 2 разных итема
order.addItem(item1); // add 'Suppserf' / 1 pc / 1₽
order.addItem(item2, 3); // add 'Oculus Rift S' / 3 pcs / 6₽

order.addItem({ name: "Suppserf", price: 200000 }); // add 'Oculus Rift S' / 1 pc / 2₽
order.addItem({ name: "Oculus Rift S", price: 1 }); // add 'Oculus Rift S' / 1 pc / 1₽
order.getCheck(); //

// убираем 1 итем
// order.removeItem(item1, 1); // remove 'Suppserf' 1 pc
// order.removeItem(item2); // remove 'Suppserf' 1 pc

// убираем все итемы
// order.removeItem(item1); // clear all item
order.getCheck(); //

// тестируем если удаляем больше итемов чем в чеке
// order.removeItem(item1, 1); // remove add 'Suppserf' 1 pc
// order.removeItem(item1, 1); // You can't delete items more then is in check

// блокируем заказ и пытаемся добавить
// order.lockOrder(); // Oops, looks like order is locked
// order.addItem(item1); // You can't add item

// разблокируем заказ и пытаемся добавить
// order.unlockOrder(); //
// order.addItem(item1); // add 'Suppserf' 1 pc

// order.getCheck();

// order.addItem({ name: "Suppserf", price: 2 }); // add 'Oculus Rift S' 1 pc
// order.addItem({ name: "Oculus Rift S", price: 1 }); // add 'Oculus Rift S' 1 pc
// order.addItem(item1); // add 'Suppserf' 1 pc
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
