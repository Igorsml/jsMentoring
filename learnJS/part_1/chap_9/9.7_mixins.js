"use strict";

// mixin — объект или класс с методами для использования в другом классе (без наследования от примеси)
// class B extends A with M {}; // https://justinfagnani.com/content/images/2015/06/class-hierarchy-2.svg
const helpfulMethods = {
  sleep() {
    console.log(`${this.name} zZzZzz`);
  },
  eat() {
    console.log(`${this.name} Omnomnom`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// copy methods
Object.assign(User.prototype, helpfulMethods);

new User("Igor").sleep(); // 'Igor zZzZzz'

// миксины могут наследоваться от других миксинов
const harmfulMethods = Object.create(helpfulMethods);

harmfulMethods.eatJunkFood = function () {
  console.log(`eating junk food`);
};

harmfulMethods.doomscrolling = function () {
  console.log(`scrolling bad news`);
};

harmfulMethods.doomscrolling(); // scrolling bad news

// old
let extend = function (target) {
  if (!arguments[1]) {
    return;
  }

  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];

    for (let prop in source) {
      if (!target[prop] && source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
  }
};

let Track = function (name) {
  this.name = name;
};

let Playlist = function (name) {
  this.name = name;
};

let nameMixin = {
  getName() {
    return this.name;
  },
};

let controlsMixin = {
  play() {
    console.log(this.name + " is playing");
  },
};

let superTrack = new Track("Super Track");
let coolPlaylist = new Playlist("Cool Playlist");

extend(Track.prototype, nameMixin, controlsMixin);
extend(Playlist.prototype, nameMixin, controlsMixin);

console.log(superTrack); // Track { name: 'Super Track' }
console.log(coolPlaylist.getName()); // Playlist { name: 'Cool Playlist' }
superTrack.play(); // Super Track is playing
coolPlaylist.play(); // Cool Playlist is playing

// Метод isPrototypeOf() отличается от оператора instanceof.
// Выражение "object instanceof AFunction" проверяет, присутствует ли в цепочке прототипов объекта object объект AFunction.prototype, а не сам объект AFunction.

// Обработчики событий

// https://www.youtube.com/watch?v=fCWRyUookBM&list=PLIcAMDxr6tppz0MDTAj7aj23_E6FwrRfO&index=2
