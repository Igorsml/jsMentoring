"use strict";

// new in ECMAScript 2022
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed." + err);
} // Error: Connecting to database failed |  [cause]: ReferenceError: connectToDatabase is not defined

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
    this.name = this.constructor.name;
  }
}

// Класс для отсутствующих свойств
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`No property "${property}"`);
    this.name = this.constructor.name;
    this.property = property;
  }
}

// Use with JSON
function readUser(json) {
  const user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

try {
  const user = readUser('{"age": 25}');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Incorrect data: ${err.message}`); // Incorrect data: No property "name"
    console.log(err.name); // PropertyRequiredError
    console.log(err.property); // name
  } else if (err instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${err.message}`);
  } else {
    throw err; // unknown error, throw exception
  }
}

// Обёртывание исключений
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = "ReadError";
  }
}

class ValidationError extends Error {
  /*...*/
}
class PropertyRequiredError extends ValidationError {
  /* ... */
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Синтаксическая ошибка", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Ошибка валидации", err);
    } else {
      throw err;
    }
  }
}

try {
  readUser("{bad json}");
} catch (e) {
  if (e instanceof ReadError) {
    console.log(e);
    // Исходная ошибка: SyntaxError:Unexpected token b in JSON at position 1
    console.log("Исходная ошибка: " + e.cause);
  } else {
    throw e;
  }
}
