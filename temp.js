// Now update the Deferred so that this code also outputs
// the same thing but with 2 sec delay between first and second callback:
class Deferred {
  constructor() {
    this.allFunc = [];
  }

  then(callback) {
    this.allFunc.push(callback);
  }

  resolve(arg) {
    this.lastResult = arg;
    for (let i = 0; i < this.allFunc.length; i++) {
      const item = this.allFunc[i];
      const res = item(this.lastResult);

      if (res instanceof Deferred) {
        const lastFuncs = this.allFunc.slice(i + 1);
        res.allFunc = lastFuncs;
        break;
      } else {
        this.lastResult = res;
      }
    }
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
