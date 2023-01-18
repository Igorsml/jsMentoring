const inputs = document.querySelectorAll("input");
let userIsTyping;

document.addEventListener(
  "focusin",
  (event) => {
    userIsTyping = true;
  },
  false
);

document.addEventListener(
  "focusout",
  (event) => {
    userIsTyping = false;
  },
  false
);

document.addEventListener("keydown", (event) => {
  try {
    if (!userIsTyping && event.code === "Backspace") {
      history.back();
    }
  } catch (err) {
    throw err;
  }
});

document.addEventListener("mouseup", (event) => {
  try {
    if (event.button === 3 || event.button === 4) {
      history.back();
    }
  } catch (err) {
    throw err;
  }
});
