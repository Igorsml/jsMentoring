"use strict";

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} running with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped `);
  }

  lickWater() {
    console.log(`${this.name} can lick water`);
  }
}

let pet = new Animal("Timmy");
pet.run("20km"); // 'Timmy running with speed 20km'

// создаем класс Cat, который наследует класс Animal
class Cat extends Animal {
  jumpHeigh() {
    console.log(`${this.name} can jump heigh`);
  }

  lickWater() {
    console.log(`${this.name} can lick wine`);
    setTimeout(() => super.lickWater(), 1e3); // Miriam can lick water | super не имеет контекста
  }
}

let cat = new Cat("Miriam");
cat.run("15km"); // 'Miriam running with speed 15km'
cat.jumpHeigh(); // 'Miriam can jump heigh'
cat.lickWater(); // 'Miriam can lick water'
cat.lickWater(); // 'Miriam can lick wine'

// если у расширяемого класса нет конструктора, он автоматически берется у наследуемого

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} running with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped `);
  }

  lickWater() {
    console.log(`${this.name} can lick water`);
  }
}

class Cat extends Animal {
  // constructor(...args) {
  //   super(...args);
  // }
  // если создадим свой, то вызов от наследуемого прекратится
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

let cat = new Cat("Miriam", 8);
console.log(cat.name); // 'Miriam'
console.log(cat.age); // 8

// свойство [[HomeObject]]
const food = {
  name: "apple",
  eat() {
    // food.eat[[HomeObject]] == food
    console.log(`Eat ${this.name}`);
  },
};

let fruit = {
  __proto__: food,
  name: "orange",
  eat() {
    // fruit.eat[[HomeObject]] == fruit
    super.eat();
  },
};

let hasVitaminC = {
  __proto__: fruit,
  name: "kiwi",
  eat() {
    // hasVitaminC.eat.[[HomeObject]] == hasVitaminC
    super.eat();
  },
};

hasVitaminC.eat(); // Eat kiwi

// nameFunction: function() and [[HomeObject]]
const testLongHand = {
  sleep: function () {
    console.log("zZzZzz");
  },
};

const igor = {
  __proto__: testLongHand,
  sleep: function () {
    super.sleep();
  },
};

igor.sleep(); // SyntaxError: 'super' keyword unexpected here
