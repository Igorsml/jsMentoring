// Now update the Deferred so that this code also outputs
// the same thing but with 2 sec delay between first and second callback:
class Deferred {
  constructor() {
    this.arrWithCallBacks = [];
  }

  then(callback) {
    return this.arrWithCallBacks.push(callback);
  }

  resolve(word) {
    this.arrWithCallBacks.forEach((callback, index) => {
      if (index === 0) {
        return (this.variable = callback(word));
      } else {
        return (this.variable = callback(this.variable));
      }
    });
  }
}

var d = new Deferred();

d.then((res) => {
  console.log("1 ", res);

  var d1 = new Deferred();

  setTimeout(() => {
    d1.resolve("a");
  }, 1000);

  return d1;
});

d.then((res) => {
  console.log("2 ", res);
  return "b";
});

d.then((res) => {
  console.log("3 ", res);
  return "c";
});

d.resolve("hello");

/* 
1 hello
2s later
2 a
3 b
*/
