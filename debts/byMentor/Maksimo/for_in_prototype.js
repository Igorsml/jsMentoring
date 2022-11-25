"use strict";
// Если вы хотите рассматривать только свойства самого объекта, а не его прототипов,
// используйте getOwnPropertyNames(), hasOwnProperty() или propertyIsEnumerable.
// Object.keys will return a list of enumerable own string properties

// Debt 1: По прототипу for…in итерируемся, проверить что enumurable falase / true
const human = {
  walk() {
    console.log(`${this.name} walking`);
  },
  num: 1,
};

const person = {
  name: "Igor",
  weight: 75,
  __proto__: human,
};

console.log(Object.keys(person)); // [ 'name', 'weight' ]

// #1 Проверить что прототип итерируется по прототипу (human)
for (const property in person) {
  console.log(property);
} // Own properties: name, weight | inherits: walk(), num

console.log(human.propertyIsEnumerable("walk")); // true

// #2 зафиксить enumerable чтобы было false, только свойства инстанса
Object.defineProperties(human, {
  walk: {
    enumerable: false,
  },
  num: {
    enumerable: false,
  },
});
console.log("walk:", human.propertyIsEnumerable("walk")); // false
console.log("num:", human.propertyIsEnumerable("num")); // false

// #3 Зафиксить чтобы были только enumrable false в прототипе

// Свойства которые enumrable true убедиться что они выведутся

class Item {
  data = 10; // свойство инстанса
  get() {} //  метод прототипа Item.prototype
  get name2() {
    return "Igor";
  } // метод прототипа Item.prototype

  static data = 20; // статическое свойство класса Item
  static gets() {} // статический метод класса Item
}

const instance = new Item();

// #4 Убедиться в enumurable false в классе
console.log(Object.getOwnPropertyDescriptors(Item.prototype)); //  get(), name2 enumerable: false
console.log(Object.getOwnPropertyDescriptors(Item)); //  gets(), data enumerable: false

// Итериуремся по классу
for (const key in Item) {
  console.log(key); //  data у класса
}

// #5 Убедиться что если true, то выведутся в for...in
Object.defineProperties(Item, {
  gets: {
    enumerable: true,
  },
  data: {
    enumerable: true,
  },
});

for (const key in Item) {
  console.log(key); //
}

// #5 почему нету get, попробовать enumurable true
Object.defineProperties(Item, {
  get: {
    enumerable: true,
  },
  name2: {
    enumerable: true,
  },
}); // не отрабатывает с false на true

console.log(Object.getOwnPropertyDescriptors(Item)); // gets(), name2 — enumerable: true
