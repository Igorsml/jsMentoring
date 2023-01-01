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
    const fun = this.arrWithCallBacks.shift();

    if (fun) {
      const result = fun(value);

      if (result instanceof Deferred) {
        result.then((value) => this.resolve(value));
      } else this.resolve(result);
    }
  }
}

var d = new Deferred();

// 1
d.then((res) => {
  debugger;
  console.log("1 ", res);

  var d1 = new Deferred();

  setTimeout(() => {
    d1.resolve("a");
  }, 1000);

  return d1;
});

// 2
d.then((res) => {
  debugger;
  console.log("2 ", res);
  return "b";
});

// 3
d.then((res) => {
  debugger;
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
