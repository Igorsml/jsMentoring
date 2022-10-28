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
