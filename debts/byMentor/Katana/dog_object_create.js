"use strict";

Expected: "I NevEr LooK bAck";
// Почему вместо value нельзя использовать 'zopa'
const pet = {
  loveWatermelon: true,
};

const dog = Object.create(pet, {
  jumps: {
    zopa: true,
    writable: false,
  },
});

console.log(dog.jumps);
// потому что value это параметр ключа, zopa не является параметром
