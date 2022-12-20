class Deferred {
  constructor() {
    this.arrWithCallBacks = [];
  }

  then(calback) {
    this.arrWithCallBacks.push(calback);
  }

  resolve(word) {
    this.arrWithCallBacks.forEach((element, index) => {
      index === 0
        ? (this.variable = element(word))
        : (this.variable = element(this.variable));
    });
  }
}

let d = new Deferred();
d.then(function (res) {
  console.log("1", res);
  return "a";
});
d.then(function (res) {
  console.log("2", res);
  return "b";
});
d.then(function (res) {
  console.log("3", res);
  return "c";
});
d.resolve("hello");
