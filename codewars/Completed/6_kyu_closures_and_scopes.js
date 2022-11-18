// https://www.codewars.com/kata/526ec46d6f5e255e150002d1

function createFunctions(n) {
  let callbacks = [];

  for (let i = 0; i < n; i += 1) {
    let callback = function () {
      return i;
    };
    callbacks.push(callback);
  }

  return callbacks;
}
