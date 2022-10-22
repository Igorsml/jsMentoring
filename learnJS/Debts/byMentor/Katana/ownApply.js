"use strict";

// standard
function goSleep() {
  console.log(`Pets ${this} go to zZzZzz to`);
}

const pets = ["Timmy", "Miley", "Miriam"];

goSleep.apply(pets, pets); // 'Pets Timmy,Miley,Miriam go to zZzZzz to'

// ownApply method
function goSleep() {
  console.log(`Pets ${this} go to zZzZzz to`);
}

Function.prototype.ownApply = function (context, args) {
  const sym = Symbol("ownApply symbol");
  context[sym] = this;
  context[sym](args);
};

const pets = ["Timmy", "Miley", "Miriam"];

goSleep.ownApply(pets, pets); // 'Pets Timmy,Miley,Miriam go to zZzZzz to'
