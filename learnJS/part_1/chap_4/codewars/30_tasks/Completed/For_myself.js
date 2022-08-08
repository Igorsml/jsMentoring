const adaptiveNameTask = (str) =>
  str.toLowerCase().replaceAll(" ", "_") + ".js";

console.log(adaptiveNameTask("6 kyuSorting by bits"));
console.log(adaptiveNameTask("6 kyu The Supermarket Queue"));
console.log(adaptiveNameTask("6 kyu Find the unique number"));
