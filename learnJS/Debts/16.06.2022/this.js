'use strict'

// Console?

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius // global scope
};

shape.diameter(); // 20
shape.perimeter(); // undefined

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