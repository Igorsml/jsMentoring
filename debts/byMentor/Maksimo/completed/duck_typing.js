"use strict";
// If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.
// «duck typing» – это проверка реализации объектом требуемого интерфейса. Если реализует – ок, используем его. Если нет – значит это что-то другое.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(Array.isArray(arr)); // true

if (arr.splice) {
  console.log("It's a duck");
} // "It's a duck"

// можно сломать, передав похожий метод в дату, но если похож на дату,есть методы даты, то будем работать как с датой
const today = new Date();

console.log(today.getTime ? "Date!" : "Not Date!"); // 'Date!'

// after __________________________________________________
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
run(transportAirplane); // 'On the plane. Be there in 2 hours...'

let transportCar = new Car();
run(transportCar); // 'In the Car. Be there in 6 hours...'

let transportBicycle = new Bicycle();
run(transportBicycle); // 'On my bike. Be there 2 days...'

// before __________________________________________________
class Airplane {}

class Car {}

class Bicycle {}

function run(modeOfTransport) {
  if (modeOfTransport instanceof Airplane) {
    console.log("On the plane. Be there in 2 hours...");
  } else if (modeOfTransport instanceof Car) {
    console.log("In the Car. Be there in 6 hours...");
  } else if (modeOfTransport instanceof Bicycle) {
    console.log("On my bike. Be there 2 days...");
  }
}

let transport = new Airplane();
run(transport); // 'On the plane. Be there in 2 hours...'

let transport2 = new Car();
run(transport2); // 'In the Car. Be there in 6 hours...'

let transport3 = new Bicycle();
run(transport3); // 'On my bike. Be there 2 days...'
