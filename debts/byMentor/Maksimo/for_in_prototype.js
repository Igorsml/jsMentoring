"use strict";
// Если вы хотите рассматривать только свойства самого объекта, а не его прототипов,
// используйте getOwnPropertyNames(), hasOwnProperty() или propertyIsEnumerable.
// Object.keys will return a list of enumerable own string properties

// Debt 1: По прототипу for…in итерируемся, проверить что enumurable falase / true
const human = {
  walk() {
    console.log(`${this.name} walking`);
  },
};

const person = {
  name: "Igor",
  weight: 75,
  __proto__: human,
};

for (const property in person) {
  if (Object.hasOwn(person, property)) {
    console.log(`Own properties is ${property}`);
  }
} // Own properties is name, weight

// зафиксить enumerable чтобы было false, только свойства инстанса
for (const key in person) {
  const isOwn = person.hasOwnProperty(key);
  isOwn ? console.log(`Own key ${key}`) : console.log(`Inherit key ${key}`);
} // Own key: name, weight, Inherit: walk (как метод протоипа human)

console.log(person.propertyIsEnumerable("walk")); // false

// Debt 2: Зафиксить чтобы были только enumrable false в прототипе

// Убедиться в enumurable false в классе
// Свойства которые enumrable true убедиться что они выведутся

class Item {
  data = 10; // свойство инстанса
  get() {} //  метод прототипа Item.prototype
  get name2() {
    return "Igor";
  } // метод прототипа Item.prototype

  static data = 20; // статическое свойство класса Item
  static get() {} // статический метод класса Item
}

const item = new Item();
console.log(Object.getOwnPropertyDescriptors(Item.prototype)); //  get, name2 enumerable: false

// почему нету get, попробовать enumurable true
for (const key in item) {
  console.log(key); // static data
}
