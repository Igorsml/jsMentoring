"use strict";
/* Почему не работает zopa вместо value?
Object.create(proto, propertiesObject), принимает вторым опциональным аргументом propertiesObject(property descriptors)
Синтаксис дескрипторов свойств таков, именно value (number, object, function, etc.)
*/

// zopa does not work
const pet = {
  loveWatermelon: true,
};

const dog = Object.create(pet, {
  jumps: {
    zopa: true,
  },
});
console.log(dog.loveWatermelon); // true
console.log(dog.jumps); // undefined

// correct work
const petOk = {
  loveWatermelon: true,
};

const dogOk = Object.create(petOk, {
  jumps: {
    value: true,
  },
});
console.log(dogOk.loveWatermelon); // true
console.log(dogOk.jumps); // true

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
