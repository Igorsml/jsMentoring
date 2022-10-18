"use strict";

// https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/javascript

const Position = {
  high: "h",
  low: "l",
}; //don't change this object!

function Warrior(name) {
  this.name = name;
  this.health = 100;
  this.deceased = false;
  this.zombie = false;

  this.attack = function (enemy, position) {
    enemy.deceased = false;
    enemy.zombie = false;
    this.damage = 0;

    if (enemy.block === position) {
      this.damage = 0;
      return;
    }

    position === "h" ? (this.damage += 10) : (this.damage += 5);

    if (!enemy.block) {
      this.damage += 5;
    }

    setHealth.call(enemy, enemy.health - this.damage);
  };
}

function setHealth(value) {
  this.health = Math.max(0, value);
  if (this.health == 0 && this.step === undefined) {
    this.deceased = true;
    this.zombie = false;
    this.step = true;
  } else {
    this.zombie = true;
    this.deceased = true;
    delete this.step;
  }
}

// Expected samurai health to equal 90, instead got 100
// expected 100 to equal 90

const ninja = new Warrior("ninja");
const samurai = new Warrior("samurai");

samurai.block = "";
ninja.attack(samurai, "h"); // 15
// samurai.block = "";
// ninja.attack(samurai, "l"); // 5
// samurai.block = "l";
// ninja.attack(samurai, "h"); // 10
// samurai.block = "l";
// ninja.attack(samurai, "h"); // 10
// samurai.block = "h";
// ninja.attack(samurai, "l"); // 5
// ninja.block = "l";
// samurai.attack(ninja, "l");
// console.log(samurai);

// creepy variant, almost work (1 error deceased)
const Position = {
  high: "h",
  low: "l",
}; //don't change this object!

function Warrior(name) {
  this.name = name;
  this.health = 100;
  this.deceased = false;
  this.zombie = false;

  this.attack = function (enemy, position) {
    this.damage = 0;

    if (enemy.block !== position && position === "h") {
      this.damage += 10;
    }
    if (enemy.block !== position && position === "l") {
      this.damage += 5;
    }
    if (enemy.block === position) {
      this.damage += 0;
    }
    // if enemy is not blocking at all then give more damage
    if (enemy.block === "") {
      this.damage += 5;
    }

    enemy.health -= this.damage;

    if (this.health <= 0) {
      this.deceased = true;
      this.zombie = false;
    }
    if (this.deceased) {
      this.zombie = true;
    }

    if (enemy.health <= 0) {
      enemy.deceased = true;
      enemy.zombie = false;
    }
    if (enemy.deceased) {
      enemy.zombie = true;
    }
  };
}

// Expected samurai health to equal 90, instead got 100
// expected 100 to equal 90

const ninja = new Warrior("ninja");
const samurai = new Warrior("samurai");

samurai.block = "";
ninja.attack(samurai, "h"); // 15
// samurai.block = "";
// ninja.attack(samurai, "l"); // 5
// samurai.block = "l";
// ninja.attack(samurai, "h"); // 10
// samurai.block = "l";
// ninja.attack(samurai, "h"); // 10
// samurai.block = "h";
// ninja.attack(samurai, "l"); // 5
console.log(samurai);
// console.log(ninja);

// ninja.block = "l";
// samurai.attack(ninja, "l");
// console.log(samurai);
