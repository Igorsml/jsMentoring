"use strict";

// Finally или просто код?
// Сравните два фрагмента кода.
// Первый использует finally для выполнения кода после try..catch:

try {
  console.log(начать работу);
  console.log(работать);
} catch (e) {
  console.log(обработать ошибку);
} finally {
  console.log(очистить рабочее пространство);
}
// Второй фрагмент просто ставит очистку после try..catch:

try {
  console.log(начать работу);
  console.log(работать);
} catch (e) {
  console.log(обработать ошибку);
}
console.log(очистить рабочее пространство);

/* Нам определённо нужна очистка после работы, неважно возникли ошибки или нет.
Есть ли здесь преимущество в использовании finally или оба фрагмента кода одинаковы? Если такое преимущество есть, то дайте пример, когда оно проявляется. */

function tetstTryCatch () {
  try {
    console.log('Start');
    someError;
  } catch (err) {
    throw new Error('TetstTryCatch failedStrictCommands before starting');
  }  finally {
    console.log('Clear workspace'); 
  }
}


tetstTryCatch(); // 1. Start, 2. Clear workspace, 3. Error: TetstTryCatch failedStrictCommands before starting

// fix 
function tetstTryCatch () {
  try {
    console.log('Start');
    someError;
  } catch (err) {
    throw new Error('TetstTryCatch failedStrictCommands before starting');
  } finally {
    console.log('Clear workspace');
  }
}
