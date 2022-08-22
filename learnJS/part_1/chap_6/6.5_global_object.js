"use strict";

console.log(globalThis);
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 44.51789999939501,
      nodeStart: 0.6347000002861023,
      v8Start: 2.245899999514222,
      bootstrapComplete: 30.03110000025481,
      environment: 13.633100000210106,
      loopStart: 39.78969999961555,
      loopExit: -1,
      idleTime: 0.1065
    },
    timeOrigin: 1661070340329.331
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
*/

// windows in browser
console.log("Aloha"); // 'Aloha' in browser
window.console.log("Aloha"); // Aloha in browser

// check windows has Promise
if (!window.Promise) {
  console.log("Your browser is too old. Please upgrade your browser first");
}
