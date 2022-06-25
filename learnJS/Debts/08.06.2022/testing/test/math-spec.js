const expect = require('chai').expect
const assert = require('assert') // node.js https://nodejs.org/api/assert.html

const {
  sum,
  makeUpperCase
} = require('../index')
// const checkAbobus = require('../index') 

describe('SUM', () => {
  it('calculate sum with positive numbers', () => {
    expect(sum(5, 7)).equal(12)
  })

  it('calculate sum with negative numbers', () => {
    expect(sum(-40, -2)).equal(-42)
  })

  it('should be numbers', () => {
    assert.strictEqual(sum(5, 5), '10'); // test string value
  })

  it('should do not NaN', () => {
    assert.equal(isNaN(sum), true); // test NaN
  })
})


describe('makeUpperCase', () => {
  it('input all lower cases', () => {
    expect(makeUpperCase(['a', 'A', 'abob'])).eql(['A', 'A', 'ABOB'])
  });
  it('input all upper cases', () => {
    expect(makeUpperCase(['A', 'A', 'ABOB'])).eql(['A', 'A', 'ABOB'])
  });
  it('arr has length > 2', () => {
    expect(makeUpperCase(['A', 'A', 'ABOB'])).to.have.lengthOf(2);
  });
});
// equal doesn't work with arr, eql work with comparing arr https://medium.com/building-ibotta/testing-arrays-and-objects-with-chai-js-4b372310fe6d


// source https://youtu.be/dhLCXsDd6bo

const obj = {
  a: 1,
  b: 2
};

describe('Obj', () => {
  it('check obj property', () => {
    expect({
      a: 1,
      b: 2
    }).to.have.property('b');
  })
  it('should do not NaN', () => {
    expect({
      a: 1,
      b: 2
    }).to.have.keys(['a', 'b']);
  })
})

// assert API 