"use strict";

// standard
function goSleep() {
  console.log(`Pets ${this} go to zZzZzz to`);
}

const pets = ["Timmy", "Miley", "Miriam"];

goSleep.apply(pets, pets); // 'Pets Timmy,Miley,Miriam go to zZzZzz to'

// own apply method
function goSleep() {
  console.log(`Pets ${this} go to zZzZzz to`);
}

Function.prototype.ownApply = function (context, args) {
  context.fun = this;
  context.fun(args);
};

const pets = ["Timmy", "Miley", "Miriam"];

goSleep.ownApply(pets, pets); // 'Pets Timmy,Miley,Miriam go to zZzZzz to'
