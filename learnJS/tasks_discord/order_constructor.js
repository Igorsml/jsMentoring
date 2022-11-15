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
  #shoppingList = new Map();
  // количество товара при добавлении
  #itemCount = 0;
  // сумма товаров в чеке
  #itemSum = 0;
  // сумма количества товаров в чеке
  #itemCountSum = 0;
  /// сумма чека
  #checkSum = 0;
  // размер скидки 10% при достижении суммы заказа 100 000₽
  #discount = 10;
  // осталось добрать суммы заказа до 100 000₽
  #discountLeft = 0;
  #isLocked = false;
  // валюта чека
  #currency = "₽";

  addItem(item, count) {
    if (this.#isLocked) {
      console.log("You can't add item");
      return;
    }

    // добавить итем в чек (+ имя, +цена)
    this.#shoppingList.set(item.name.toUpperCase(), item.price);

    for (const [name, price] of this.#shoppingList.entries()) {
      if (name === item.name.toUpperCase()) {
        // console.log("work diff");
        this.#itemSum += price;
        this.#shoppingList.set("quantity", count ?? 1);
        this.#itemCount += count ? count : 1;
      } else {
        // console.log("work");
        this.#itemSum += item.price;
        this.#itemCount += count ? count : 1;
      }
    }
    console.log(this.#shoppingList);
    console.log("item sum:", this.#itemSum);
    console.log("item count:", this.#itemCount);
  }

  // removeItem(item, deleteCount) {
  //   // Нельзя убрать больше чем было в чеке
  //   if (this.#isLocked || this.#itemCountObj[item.name] < deleteCount) {
  //     console.log("You can't delete items more then is in check");
  //     return;
  //   }

  //   // убрать из чека this.#count итемов (если не указано сколько - убрать все)
  //   if (!deleteCount || typeof deleteCount !== "number") {
  //     this.#shoppingList = [];
  //     this.#itemCountObj[item.name] = 0;
  //     this.#sum = 0;
  //     this.#itemCount = 0;
  //   } else {
  //     this.#itemCountObj[item.name] -= deleteCount;
  //     this.#itemCount -= deleteCount;
  //     this.#sum -= this.#shoppingList[item.name];
  //   }
  // }

  // получить информацию сколько каких итемов в чеке,
  // общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
  // getCheck() {
  //   console.log("======== Big check === big dick ========");
  //   for (const [key, value] of Object.entries(this.#shoppingList)) {
  //     const name = key;
  //     this.#qty += this.#itemCountObj[key];
  //     this.#checkSum += this.#qty * this.#shoppingList[key];
  //     this.#discountLeft = this.#checkSum - 100000;
  //     if (this.#qty >= 1)
  //       console.log(
  //         `x${this.#itemCount} ${name.toUpperCase()} = ${this.#checkSum}${
  //           this.#currency
  //         }`
  //       );
  //   }
  //   console.log("================================");
  //   if (this.#sum > 100000) {
  //     this.#sumDiscount = this.#checkSum / this.#discount;
  //     this.#checkSum -= this.#sumDiscount;
  //     console.log(
  //       `Your discount is ${this.#discount}% (${this.#sumDiscount}${
  //         this.#currency
  //       })`
  //     );
  //   } else {
  //     console.log(`For discount left ${this.#discountLeft}${this.#currency}`);
  //     console.log(`Order quantity: ${this.#itemCount} pcs`);
  //     console.log(`Order sum is: ${this.#checkSum}${this.#currency}`);
  //     return;
  //   }

  //   console.log(`Order quantity: ${this.#itemCount} pcs`);
  //   console.log(`Order sum is: ${this.#checkSum}${this.#currency}`);
  // }

  lockOrder() {
    try {
      this.#isLocked = true;
      if (this.#isLocked === true) {
        throw new Error("Error: oops, looks like order is locked!");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  unlockOrder() {
    try {
      this.#isLocked = false;
      if (this.#isLocked !== true) {
        throw new Error("Confirmed: order is unlocked!");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
}

const order = new Order(item1);

// добавляем 2 разных итема
order.addItem(item1, 2); // add 'Suppserf' 1 pc, 16000₽
// order.addItem(item2, 3); // add 'Oculus Rift S' 10 pcs
// order.getCheck();
order.addItem({ name: "Suppserf", price: 3 }); // add 'Oculus Rift S' 1 pc
// order.addItem({ name: "Oculus Rift S", price: 1 }); // add 'Oculus Rift S' 1 pc
// order.getCheck();

// убираем 1 итем
// order.removeItem(item1, 1); // remove 'Suppserf' 1 pc

// убираем все итемы
// order.removeItem(item1); // clear all item

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
