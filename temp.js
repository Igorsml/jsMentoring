class Deferred {
  constructor() {
    this.arrWithCallBacks = [];
  }

  then(callback) {
    let result = this.arrWithCallBacks.push(callback);
    return result;
  }

  async resolve(word) {
    this.arrWithCallBacks.forEach((callback, index) => {
      if (index === 0) {
        return (this.variable = callback(word));
      } else {
        return (this.variable = callback(this.variable));
      }
    });
  }
}

var d1 = new Deferred();

setTimeout(() => {
  console.log("deferred:", d1.resolve("a"));
}, 1000);
