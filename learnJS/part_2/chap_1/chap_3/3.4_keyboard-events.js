// события клавиатуры keydown при нажатии, keyup при отпускании
console.log("keydown key=ArrowDown code=ArrowDown");
console.log("keydown key=ArrowDown code=ArrowDown (repeat)");
console.log("keyup key=ArrowDown code=ArrowDown");

// even.key получает символ (регистроазависимый), а even.code код клавиши
console.log("z:", (event.key = "z"), (event.code = "keyZ"));
console.log("Z:", (event.key = "Z"), (event.code = "keyZ"));

// другие even.code строятся по типу Digit<число> или обычные Enter, Tab...

// Можем переназначить стандартные клавиши в браузере
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyC") console.log("Copy paste is disabled");
  document.body.oncopy = () => {
    return false;
  };
});
