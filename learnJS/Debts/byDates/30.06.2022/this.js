"use strict";

class Name {
  constructor(name) {
    this.name = name;
  }

  logName1 = () => {
    console.log(this.name); // instance method
  };

  logName2() {
    console.log(this.name); // prototype method
  }

  logName3 = () => {
    return function () {
      console.log(this.name); // instance method
    };
  };

  logName4() {
    return (this.name = () => {
      console.log(this.name); // prototype method
    });
  }
}

const nameIgor = new Name("Igor");

nameIgor.logName1(); // 'Igor'
Name.prototype.logName2(); // undefined
console.log(nameIgor.logName3()); // function ()
Name.prototype.logName4(); // ReferenceError: name is not defined

// console.log("nameIgor", Object.getOwnPropertyDescriptors(Name.prototype));
