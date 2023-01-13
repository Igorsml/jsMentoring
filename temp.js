// Now update the Deferred so that this code also outputs
// the same thing but with 2 sec delay between first and second callback:
class Deferred {
  constructor() {
    this.arrWithCallBacks = [];
  }

  then(callback) {
    this.arrWithCallBacks.push(callback);
  }

  resolve(value) {
    this.arrWithCallBacks.forEach((callback, index) => {
      // x2 fun
      this.fun = this.arrWithCallBacks.shift();
      // funResult = deferred, b
      this.funResult = this.fun(value);
      console.log("this.funResult:", this.funResult);
    });
  }
}

var d = new Deferred();

// 1
d.then((res) => {
  console.log("1 ", res);

  var d1 = new Deferred();

  setTimeout(() => {
    d1.resolve("a");
  }, 2000);

  return d1;
});

// 2
d.then((res) => {
  console.log("2 ", res);
  return "b";
});

// 3
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

      if (index === 0) {
        this.variable = callback(word);
      } else if (index === 0 && this.variable instanceof Deferred) {
        this.variable.then((word) => this.variable.resolve(word));
      } else {
        this.variable = callback(this.variable);
      }
*/
