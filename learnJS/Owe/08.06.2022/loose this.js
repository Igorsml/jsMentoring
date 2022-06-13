'use strict'

// case 1
function findThis() {
  console.log(this);
}

findThis() // this = undefined ('use strict', ES6 module)

// case 2
function useCase(name) {
  this.myName = name;

  function returnMe() {
    return this; // scope is lost because of the inner function
  }
}

useCase('Igor');

// case 3
const home = {
  price: 60000,
  discount: 0.2,
  findDiscount() {
    return this.price * this.discount
  },
};

console.log('home:', home.findDiscount()) // 12000

const buy = home.findDiscount;
buy(); // NaN 