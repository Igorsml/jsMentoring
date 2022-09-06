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
  this.isLocked = false;

  console.log("new.target:", new.target);

  this.addItem = function (item, count) {
    if (this.isLocked) {
      console.log("You can't add item");
    }
    // добавить итем в чек (+ имя +цена)
    this.shoppingList[item.name] = item.price;
    this.price = item.price;
  };

  this.removeItem = function (item, count) {
    // убрать из чека count итемов (если не указано сколько - убрать все).
    // Нельзя убрать больше чем было в чеке
  };

  this.getCheck = function () {
    return this.count;
    // получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р).
    // Формат произвольный, чтобы был читабельный
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
order.addItem();
console.log(order);

/* [Конструктор заказа. Основы. learnjs 1.1..1.4]
1. написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, count) - добавить итем в чек (+ имя +цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы
Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке
3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов 
Формат item - объект с 1. названием итема 2. ценой за штуку.
2 итема с одинаковым именем считаем одной позицией в чеке*/
