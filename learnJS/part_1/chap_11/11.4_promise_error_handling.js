import process from 'node:process';

"use strict";


// catch (onReject), возвращает promise. Уместно добавлять в конце,
// это может быть и в конце всех цепочек then для перехвата всех ошибок

const rejectInSecond = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Time is up"));
  }, 1000);
})
  .then(() => {
    console.log("Almost there");
  })
  .catch((err) => {
    console.error(err.message);
    // "Time is up"
  });

// или вариант с пробрасыванием ошибки
const rejectInSecond = new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Time is up");
  }, 1000);
}).catch((err) => {
  console.error(err.message);
  // "Time is up"
});

// случай, если catch нету, то в браузере можно отловить через unhandledrejection
new Promise(function() {
  funIsNowDefined(); // ReferenceError: funIsNowDefined is not defined
})
  .then(() => {
    console.log('Hello')
  }); // без .catch в самом конце

   // unhandledrejection в node.js 
   process.on('unhandledRejection', (reason, promise) => {
    console.log(`Reason: ${reason}`); // Reason: ReferenceError: funIsNowDefined is not defined
    console.log(`Promise: ${promise}`); // Promise: [object Promise]
  });

  // unhandledrejection в браузере
  window.addEventListener('unhandledrejection', (event) => {
    console.log(event.promise);
    console.log(event.reason);
  });

 

// Под капотом catch() содержит вызов then(), где первый колбэк установлен в undefined: 
.catch(onReject) → then(undefined, onReject)

// если не завершать цепочку catch, то будет Uncaught (in promise) Error