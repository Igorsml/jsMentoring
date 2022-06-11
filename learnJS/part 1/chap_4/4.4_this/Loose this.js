'use strict'

function findThis() {
  console.log(this);
}

findThis() // this = undefined ('use strict', ES6 module)

function useCase(name) {
  this.myName = name;

  function returnMe() {
    return this; // scope is lost because of the inner function
  }
}

useCase('Igor');