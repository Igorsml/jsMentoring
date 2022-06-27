'use strict'

<<<<<<< HEAD
=======
function fun() {
  this = {} // this у функции уже существует | SyntaxError: Invalid left-hand side in assignment
}

function fun() {
  console.log('this === window:', this === window) // true
}

>>>>>>> 3898ed4b5261a061eb6300f48daf76d91aa89ec7
// This в стрелке / объекте

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter(); // 20 (всё ок, функция имеет область видимости объекта)
shape.perimeter(); // NaN (стрелка не имеет своего контекста)


//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

const person = {
  name: "Lydia"
};

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21); // Lydia is 21

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

function Car() {
  this.make = "Lamborghini";
  return {
    make: "Maserati"
  };
}

const myCar = new Car();
console.log(myCar.make); // Maserati
// Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора. 
// Мы возвращаем строку "Maserati", поэтому myCar.make равно "Maserati".

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus()) // 🥑
  console.log(data.getStatus.call(this)) // 😎
}, 0)

/*
С помощью метода call мы можем изменить объект, на который ссылается ключевое слово this. 
В функциях ключевое слово this относится к объекту, которому принадлежит функция. 
Мы объявили функцию setTimeout для объекта global, поэтому в функции setTimeout ключевое слово this ссылается на объект global. 
В глобальном объекте есть переменная с именем status со значением "😎". При регистрации this.status выводится "😎".
*/

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

const person = {
  firstName: "Igor",
  lastName: "Pomidor",
  pet: {
    name: "Miley",
    breed: "half - breed",
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.pet ? .name); // Miley
console.log(person.pet ? .family ? .name); // undefined
console.log(person.getFullName ? .()); // Igor Pomidor
console.log(member.getLastName ? .()); // undefined

//_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

function findDogName() {
  return func = () => console.log(this.name);
}

let dog = {
  name: 'Timmy',
  meta: findDogName,
}

console.log(dog.meta()) // () => console.log(this.name)
console.log(dog.meta()()) // Timmy

// this in obj property
function Car(make, model, year) {
  // this = {};  (неявно)
  this.make = make;
  this.model = model;
  this.year = year;
  // return this (неявно)
}
let mycar = new Car("Ford", "Fusion", 2008);

'use strict'

function sayHi() {
  alert(this);
}

sayHi(); // [Object object]

// 'use strict'
function sayHi() {
  alert(this);
}

sayHi(); //undefined

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
  nameA: 'Aboba',
  country: {
    name: 'Abobastan',
    getName: function getName() {
      return this.name;
    }
  },
};

console.log('company.country.getName():', company.country.getName()) // Abobastan, this.nameA - undefined

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


//Arrow in array method
const printer = {
  items: [1, 'aboba', NaN],
  print() {
    this.items.forEach(() => console.log(this.items))
  },
};

printer.print(); // x3 [1, 'aboba', NaN]


const animal = {
  weight: '100k',
  waterResist: 5,
  sound: 'Meow',
  canFly() {
    canSwim = () => {
      console.log(this.sound)
      return canSwim();
    }
  }
};

console.log('canFly:', canSwim()) // undefined