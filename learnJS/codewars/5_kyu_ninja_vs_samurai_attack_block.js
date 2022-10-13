"use strict";

// https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/javascript

const Position = {
  high: "h",
  low: "l",
}; //don't change this object!

function Warrior(name) {
  this.name = name;
  this.health = 100;

  this.setHealth = function (value) {
    this.health = value;
    this.deceased = true;
    this.zombie = false;

    if (this.health == 0) {
      this.deceased = true;
    } else if (this.deceased) {
      this.zombie = true;
    }
  };

  this.attack = function (enemy, position) {
    this.damage = 0;

    if (enemy.block != position) {
      this.damage += 10;
    } else {
      this.damage += 5;
    }
    // if enemy is not blocking at all then give more damage
    if (!enemy.block) {
      this.damage += 5;
    }

    setHealth(enemy.health - this.damage);
  };
}

// Expected samurai health to equal 90, instead got 100
// expected 100 to equal 90

const ninja = new Warrior("Hanzo Hattori");
const samurai = new Warrior("Ryōma Sakamoto");

samurai.block = "l";
ninja.attack(samurai, "h");
console.log(ninja.health);
console.log(samurai);
