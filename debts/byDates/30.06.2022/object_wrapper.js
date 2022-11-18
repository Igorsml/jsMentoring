"use strict";
// Как убрать оболочку объекта, какие с этим могут быть проблемы?

// Имеем оболочку new String, без нее была бы ошибка Uncaught TypeError: quote.showQuote is not a function
const quote = new String("Winter is coming");
quote.character = "GOT";
quote.ShowQuote = function () {
  console.log(`${this} is quote from ${this.character}`);
};

quote.ShowQuote(); // Winter is coming is quote from GOT
console.log(quote.constructor === String); // true

// wrapper object its equivalent primitive value different
console.log(new String("Hi") === "Hi"); // false
console.log("Hi" === "Hi"); // true

// Boolean same
const answer = new Boolean(true);
answer.show = function () {
  return this.valueOf() ? "Yes" : "No";
};

console.log(answer.show()); //=> "Yes"
