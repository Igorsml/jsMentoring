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
