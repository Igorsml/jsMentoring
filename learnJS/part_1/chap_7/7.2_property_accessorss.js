"use strict";

const person = {
  name: "Igor",
  surname: "Sml",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  // fix with set
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(person.fullName); // 'Igor Sml'
person.fullName = "Igor Vel"; // TypeError: Cannot set property fullName of #<Object> which has only a getter
person.fullName = "Igor Vel";
console.log(person.fullName); // Igor Vel

// Object.defineProperty
const person = {
  name: "Igor",
  surname: "Sml",
};

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(person.fullName); // 'Igor Sml'
for (let key in person) {
  console.log(key); // name, surname
}

const person = {
  get name() {
    return this._name;
  },

  set name(value) {
    value.length < 4 ? console.log("Name is too short") : value;
    this._name = value;
  },
};

person.name = "Nika";
console.log(person.name); // 'Nika'
person.name = ""; // Name is too short
console.log(person._name); // свойства, которые начинаются с символа "_", являются внутренними, и к ним не следует обращаться из-за пределов объекта.

function UserBirthday(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.birthday.getFullYear();
    },
  });
}

let igor = new UserBirthday("Igor", new Date(1992, 8, 1));
console.group(igor.birthday); // 1992-08-31
console.log(igor.age); // 30

const modifyData = {
  get date() {
    return this._date;
  },

  set date(value) {
    this._date = new Intl.DateTimeFormat("en-US").format(value);
  },
};

modifyData.date = new Date(2022, 2, 9);
console.log(modifyData.date); // 3/9/2022
