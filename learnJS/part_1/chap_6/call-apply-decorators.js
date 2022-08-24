"use strict";

// call(context, arg1, arg2, ...)
function callPet() {
  console.log(`Come here ${this.name}!`);
}

const petTimmy = { name: "Timmy" };
const petMiley = { name: "Miley" };

callPet.call(petTimmy); // Come here Timmy!
callPet.call(petMiley); // Come here Miley!

// apply
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const max = Math.max.apply(null, numbers);
console.log(max); // 8

function callPet() {
  console.log(`Come here ${this.name}!`);
}
const petFood = ["Watermelon", "Meat", "Shit"];

const petMiriam = { name: "Miriam" };
const petAbobus = { name: "Abobus" };

callPet.apply(petMiriam, petFood); //
callPet.apply(petAbobus, petFood); //

//
function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Igor",
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function () {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`IQ is ${this.iq}`);
    console.groupEnd();
  },
};

const person2 = {
  name: "Nika",
  age: 27,
  iq: 100500,
};

const fnPerson2InfoLog = person.logInfo.bind(person2);
fnPerson2InfoLog(); //  Name is Nika, Age is 27, IQ is 100500
