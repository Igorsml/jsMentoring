// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

// Нет, .catch работает синхронно, запланированный проброс ошибки не тригернет .catch
