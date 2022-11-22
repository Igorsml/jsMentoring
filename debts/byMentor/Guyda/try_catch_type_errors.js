"use strict";
// какие типы ошибок может ловить try catch

// 7 типов ошибок
// TypeError __________________________________________________
try {
  const length = 12;
  const num = length(54); // may throw three types of exceptions
} catch (err) {
  if (err instanceof TypeError) {
    throw new TypeError("Oopsie, TypeError", { cause: err });
    // TypeError: Oopsie, TypeError. [cause]: TypeError: length is not a function
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// RangeError __________________________________________________
function sum(num) {
  if (num < 1) return num;

  return num + sum(num - 1);
}

try {
  sum(100000); // RangeError: Maximum call stack size exceeded
} catch (err) {
  if (err instanceof RangeError) {
    throw RangeError("Oopsie, RangeError", { cause: err });
    // RangeError: Oopsie, RangeError. [cause]: RangeError: Maximum call stack size exceeded
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// ReferenceError __________________________________________________
try {
  something; // may throw three types of exceptions
} catch (err) {
  if (err instanceof ReferenceError) {
    throw new ReferenceError("Oopsie, here you are your error", { cause: err });
    // Oopsie, here you are your error. [cause]: ReferenceError: something is not defined
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// SyntaxError can't use try...catch.  _____________________________________
try {
  const cube = (num) => {
    return num * num * num;
  })
} catch (err) {
  if (err instanceof SyntaxError) {
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// Other way window.onerror or muscula - https://prnt.sc/A53XdvhXJHpQ
window.onerror = function (e) {
  console.log('Error: ', e);
};

console.log('a'');


// URIError __________________________________________________
try {
  decodeURI("%")
} catch (err) {
  if (err instanceof URIError) {
    throw new Error("Here you are your error", {cause: err})
    // Error: Here you are your error. [cause]: URIError: URI malformed
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}


// EvalError ???__________________________________________________
try {
  console.log(eval(0 / 0)); // may throw three types of exceptions
} catch (err) {
  if (err instanceof EvalError) {
    throw new EvalError("Oopsie, here you are your error", { cause: err });
    // Oopsie, here you are your error. [cause]: ReferenceError: something is not defined
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// InternalError __________________________________________________
// ReferenceError: InternalError is not defined  или замена на RangeError, возможно не особо поддерживатеся
function loop(x) {
  if (x >= 1000000000000000) return;

  // do stuff
  loop(x + 1);
}


try {
  loop(0);
} catch (err) {
  if (err instanceof InternalError) {
    throw new InternalError('Here you are your error', { cause: err })
  } else {
    // statements to handle any unspecified exceptions
    console.log(err); // pass exception object to error handler
  }
}

// https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492
