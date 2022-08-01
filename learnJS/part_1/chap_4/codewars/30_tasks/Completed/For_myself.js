const adaptiveNameTask = (str) =>
  str.toLowerCase().replaceAll(" ", "_") + ".js";

console.log(adaptiveNameTask("6 kyu Does my number look big in this?"));
