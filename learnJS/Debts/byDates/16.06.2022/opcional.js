'use strict'

// Опциональная цепочка ?./_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/_/

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