'use strict'

// sum test
function sum(n1, n2) {
  return n1 + n2;
}

// toUpperCase


const makeUpperCase = (arr) => {
  return arr.map(el => el.toUpperCase())
}

// is true
// const checkAbobus = (person) => person === true ? 'abobus' : 'someOneElse';

// module.exports = checkAbobus;
module.exports = {
  sum,
  makeUpperCase
}