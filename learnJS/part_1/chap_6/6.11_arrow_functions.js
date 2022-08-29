"use strict";

const pets = {
  teamTitle: "Timmy Team",
  team: ["Miley", "Timmy", "Miriam"],
  showPetsList() {
    this.team.forEach((pet) => console.log(this.teamTitle + " pet: " + pet));
  },
};

pets.showPetsList(); // Timmy Team pet: Miley, Timmy Team pet: Timmy, Timmy Team pet: Miriam

// стрелка в функции конструктора ен работают
const constructor = (name) => (this.name = name);
const showName = new constructor("Igor");
console.log(showName.name); // TypeError: constructor is not a constructor

const test = new (() => {})(); // TypeError: (intermediate value) is not a constructor

// Always throws a syntax error
const logParams = (first, second, first) => {
  console.log(first, second);
};
logParams(); // SyntaxError: Duplicate parameter name not allowed in this context

function logParams(first, second, first) {
  console.log(first, second);
}
logParams(); // undefined

// не имеет своих аргументов, но можно взять rest
const average = () => {
  const length = arguments.length;
  if (length == 0) return 0;
};
average(); // ReferenceError: arguments is not defined

const avarage = (...arguments) => {
  console.log(arguments); //  [1, 2]

  if (arguments.length === 0) return 0;
  const sumReduceFn = function (a, b) {
    return a + Number(b);
  };
  return arguments.reduce(sumReduceFn, 0) / arguments.length;
};
avarage(1, 2); // 1,5 | with use strict → Uncaught SyntaxError: Unexpected eval or arguments in strict mode
