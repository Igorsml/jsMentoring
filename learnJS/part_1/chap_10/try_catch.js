"use strict";

try {
  // {{{{{{{{{{{{ - код должен быть синтаксически верным, иначе не выполнится
  console.log("I'm ok"); // 'I'm ok'

  someError;

  console.log("What about me?"); // не выполнится
} catch (err) {
  console.log("Here you are, your error"); // 'Here you are, your error'
}

// setTimeout try...catch
try {
  setTimeout(() => noSuchVariable, 1e3);
} catch (err) {
  console.log("Does not work!");
}

// setTimeout try...catch fix
setTimeout(() => {
  try {
    someError;
  } catch (err) {
    console.log("someError is not defined");
  }
}); // someError is not defined

// catch has name, message, stack and other
try {
  someError;
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // someError is not defined
  console.log(err.stack); // ReferenceError: someError is not defined
}

// можно и  без (err), но тогда не будут работать err.name, err.message, err.stack ...
try {
  someError;
} catch {
  console.log(err.name); // ReferenceError: err is not defined
  console.log(err.message); // ReferenceError: err is not defined
  console.log(err.stack); // ReferenceError: err is not defined
}

// пример try...catch - невалидный JSON
const json = "{some JSON}";

try {
  const user = JSON.parse(json);
  console.log(user.name);
} catch (err) {
  console.log("Sorry, could not parse JSON: " + json); // Sorry, could not parse JSON: {some JSON}
  console.log(err.name); // SyntaxError
  console.log(err.message); // Unexpected token s in JSON at position 1
}

// try...catch...throw new Error
const json2 = '{"age": 25}';

try {
  const user = JSON.parse(json2);

  if (!user.name) {
    throw new SyntaxError("user.name undefined in JSON");
  }

  console.log(user.name);
} catch (err) {
  console.log("JSON Error: " + err.message); // JSON Error: user.name undefined in JSON
}
