const adaptiveNameTask = (str) =>
  str.toLowerCase().replaceAll(" ", "_") + ".js";

adaptiveNameTask("5 kyu The Hashtag Generator"); // '5_kyu_the_hashtag_generator'
console.log(adaptiveNameTask("7 kyu Help the Fruit Guy"));