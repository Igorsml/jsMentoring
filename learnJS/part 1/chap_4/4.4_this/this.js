'use strict'

const company = {
  name: 'Abobapple',
  employees: [],
};
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = function () {
  return 'Abobapple';
};

// Call method
console.log(company.name) // 'Abobapple'
company.getName(); // 'Abobapple'
company.name = 'lol'
company.getName(); // expected lol, received Abobapple
// Метод возвращает строку и никак не использует данные объекта. Если поменяется имя, то метод продолжит возвращать "зашитое" в него значение, а не текущее имя компании внутри объекта.

//Fix with this
const company = {
  name: 'Abobapple',
  employees: [],
};
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = function getName() {
  return this.name;
};

company.getName(); // 'Abobapple'
company.name = 'lol'
company.getName(); // lol


// this can rewrite data
company.setName = function setName(name) {
  this.name = name;
};

company.getName(); // "lol"
company.setName('Aboba pineapple');
company.getName(); // "Aboba pineapple"

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

const dog = {
  name: 'Miley',
  getName: function getName() {
    return this.name;
  }
}

const cat = {
  name: 'Myriam',
}

cat.getName = dog.getName;

console.log('dog.getName():', dog.getName()) // Miley
console.log('cat.getName():', cat.getName()) // Myriam
//Вызов той же самой функции из другого объекта привел к смене объекта, на который ссылается this. Эта особенность называется поздним связыванием. Значение this ссылается на тот объект, из которого происходит вызов метода. !Вопрос - выходит можно в одном объекте прописать метод, может быть в темплейте и далее по другим объектам им пользоваться?

const company = {
  name: 'Aboba',
  country: {
    name: 'Abobastan',
    getName: function getName() {
      return this.name;
    }
  },
};

console.log('company.country.getName():', company.country.getName()) // Abobastan

// Short method 
const company = {
  name: 'Aboba',
  getName() {
    return this.name;
  },
  // The same
  // getName: function getName() {
  //   return this.name;
  // },
};

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

// Arrow function
let pets = {
  name: 'Timmy',
  age: 8,
  isDog() {
    console.log(Boolean(this.name))
  },
  showDog() {
    console.log('showDog:', this)
  },
  showDogAge() {
    const showAge = () => {
      console.log('showAge:', this.age)
    }
    return showAge();
  },
};

pets.isDog() // true
pets.showDog() // object pets
pets.showDogAge() // 8


const animal = {
  weight: '100k',
  waterResist: 5,
  sound: 'Meow',
  canFly() {
    const canSwim = () => {
      console.log(this.sound)
      return canSwim();
    }
  }
}

console.log('canFly:', canSwim()) // undefined