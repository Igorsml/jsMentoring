"use strict";

// Встроенный класс Error от JS
class Error {
  constructor(message) {
    this.message = message;
    this.name = name;
    this.stack = stack; // <call stack>
  }
}

// Унаследуемся от Error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function test() {
  throw new ValidationError("Oopsie");
}

try {
  test();
} catch (err) {
  console.log(err.message); // 'Oopsie'
  console.log(err.name); // 'ValidationError
  console.log(err.stack); // stack ValidationError: Oopsie, список вложенных вызовов с номерами строк для каждого
}

// Пробуем с JSON
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Use with JSON
function readUser(json) {
  const user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('Not found field "age"');
  }
  if (!user.name) {
    throw new ValidationError('Not found field "name"');
  }

  return user;
}

try {
  const user = readUser('{"age": 25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Incorrect data: ${err.message}`);
  } else if (err instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${err.message}`);
  } else {
    throw err; // unknown error, throw exception
  }
}

// result - Incorrect data: Not found field "name"
