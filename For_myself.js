const adaptiveNameTask = (str) =>
  str.toLowerCase().replaceAll(" ", "_") + ".js";

console.log(adaptiveNameTask("7 kyu Multiplication Generators"));
