'use strict'

let user = {
  // address undefined
}

console.log('user.address.street:', user.address.street)
// user.address = undefined, user.address.street 'TypeError: Cannot read properties of undefined (reading 'street')'

// document.querySelector('.elem') равен null, если элемента нет
let html = document.querySelector('.elem').innerHTML; // Cannot read properties of null

// fix woth ?.

let user = {}; //
console.log(user ? .address ? .street); // undefined, чтобы код смог продолжить работу?

const user = {
  address: '1st road',
  street: '27',
};
console.log(user ? .address ? .street); // Identifier 'user' has already been declared

let user = null; // with undefined too
let x = 0;

user ? .sayHi(x++); // нет "user", поэтому выполнение не достигает вызова sayHi и x++

console.log(x); // 0, значение не увеличилось

let userAdmin = {
  admin() {
    console.log("I am admin");
  }
};

let userGuest = {};

userAdmin.admin ? .(); // I am admin

userGuest.admin ? .(); // undefined  ничего не произойдет (такого метода нет)


let key = "firstName";
let user = {
  name: "John"
};

let user2 = null;
delete user ? .name; // delete if user is

alert(user ? . [key]); // John
alert(user2 ? . [key]); // undefined