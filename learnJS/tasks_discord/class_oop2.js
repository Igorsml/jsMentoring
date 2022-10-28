"use strict";

// With given example, need to write prototype analog
class BasicItem {
  constructor(_testProp) {
    this._parentProp = _testProp + 100;
  }

  getParentProp() {
    return this._parentProp;
  }
}
//
class Item extends BasicItem {
  static data = 5;

  constructor(_testProp) {
    super(_testProp);
    this._testProp = _testProp;
  }

  getProp() {
    return this._testProp + this.getParentProp() + Item.data;
  }
}
//
log(new Item(1000).getProp()); // expect 2105

// Function prototype
function BasicItem() {
  this._parentProp = _test.Prop + 100;

  this.getParentProp = function () {
    return this._parentProp;
  };
}

function Item() {
  this.data = 5;
  (this._testProp = _test.Prop),
    (this.getProp = function () {
      return this._testProp + this.getParentProp() + Item.data;
    });
}

// Item.prototype = Object.create(BasicItem.prototype);

// https://stackoverflow.com/questions/28487909/extending-prototypes-in-javascript-good-way
// https://proglib.io/p/klassy-na-prototipah-kak-rabotaet-oop-v-javascript-2020-02-20
