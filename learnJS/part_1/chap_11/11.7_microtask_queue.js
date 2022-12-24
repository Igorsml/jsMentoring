"use strict";

function checkMicroTasks() {
  setTimeout(() => {
    console.log("timeout-0"); // 4
  }, 0);

  let promise = Promise.resolve();

  promise
    .then(() => console.log("then1")) // 2
    .then(() => console.log("then2")); //  3

  console.log("sync-console-log"); // 1
}

checkMicroTasks();
