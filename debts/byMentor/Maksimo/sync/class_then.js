class Deferred {
  constructor(name) {
    this.name = this.constructor.name;
  }
  thenCallbacks = [];

  resolve(value) {
    return console.log(value);
  }

  then(cb) {
    return cb();
  }
}

let deferred = new Deferred();

deferred.then((res) => {
  console.log("1 ", res);
  return "a";
});

deferred.then((res) => {
  console.log("2 ", res);
  return "b";
});

deferred.then((res) => {
  console.log("3 ", res);
  return "c";
});

deferred.resolve("hello");

/* Implement the Deferred class so that the following code outputs this text once 'resolve' will be called:
1 hello
2 a
3 b 

now:
1 a
2 b 
3 c

let promise = new Promise();


promise.then((res) => {
  console.log("1 ", res);
  return "a";
});
promise.resolve("hello"); // TypeError: Promise resolver undefined is not a function
*/
