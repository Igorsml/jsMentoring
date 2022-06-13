const expect = require('chai').expect
// const assert = require('assert'); 
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
})

describe('makeUpperCase', () => {
  it('input all lower cases', () => {
    expect(makeUpperCase(['a', 'A', 'abob'])).eql(['A', 'A', 'ABOB'])
  });
  it('input all upper cases', () => {
    expect(makeUpperCase(['a', 'A', 'abob'])).eql(['A', 'A', 'ABOB'])
  });
});
// it('calculate sum with negative numbers', () => {
//   assert.isTrue(checkAbobus())
// })