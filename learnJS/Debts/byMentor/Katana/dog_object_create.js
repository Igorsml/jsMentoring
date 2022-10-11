"use strict";
// Почему вместо value нельзя использовать 'zopa'
const pet = {
  loveWatermelon: true,
};

const dog = Object.create(pet, {
  jumps: {
    zopa: true,
  },
});

console.log(dog.jumps);
