"use strict";
// If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.

// after
class Airplane {
  message() {
    console.log("On the plane. Be there in 2 hours...");
  }
}

class Car {
  message() {
    console.log("In the Car. Be there in 6 hours...");
  }
}

class Bicycle {
  message() {
    console.log("On my bike. Be there 2 days...");
  }
}

function run(modeOfTransport) {
  modeOfTransport.message();
}

let transportAirplane = new Airplane();
run(transportAirplane);

let transportCar = new Car();
run(transportCar);

let transportBicycle = new Bicycle();
run(transportBicycle);

// before
// class Airplane {}

// class Car {}

// class Bicycle {}

// function run(modeOfTransport) {
//   if (modeOfTransport instanceof Airplane) {
//     console.log("On the plane. Be there in 2 hours...");
//   } else if (modeOfTransport instanceof Car) {
//     console.log("In the Car. Be there in 6 hours...");
//   } else if (modeOfTransport instanceof Bicycle) {
//     console.log("On my bike. Be there 2 days...");
//   }
// }

// let transport = new Airplane();
// run(transport);

// let transport2 = new Car();
// run(transport2);

// let transport3 = new Bicycle();
// run(transport3);
