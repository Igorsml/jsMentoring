"use strict";
// какие типы ошибок может ловить try catch

// 7 типов ошибок
try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  console.log(toPrecision(500).toPrecision());
} catch (err) {
  if (err instanceof RangeError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof ReferenceError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof SyntaxError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof URIError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof EvalError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

try {
  myroutine(); // may throw three types of exceptions
} catch (err) {
  if (err instanceof InternalError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492
