"use strict";

class Name {
  constructor(props) {
    this.props = props;
    this.name = this.constructor.name;
  }

  logName1 = () => {
    console.log(this.name); //
  };

  logName2() {
    console.log(this.name); //
  }

  logName3 = () => {
    return function () {
      console.log(this.name); //
    };
  };

  logName4() {
    return (name = () => {
      console.log(this.name); //
    });
  }
}

const name = new Name("Igor");

name.logName1();
