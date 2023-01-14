const inputs = document.querySelectorAll("input");

inputs.forEach((elem) => {
  elem.parentNode.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") return false;
  });
});

document.addEventListener("keydown", (event) => {
  try {
    if (event.key === "Backspace") {
      history.back();
    }
  } catch (err) {
    throw err;
  }
});

document.addEventListener("mouseup", (event) => {
  try {
    if (event.button === "3" || event.button === "4") {
      console.log("work mouse");
    }
  } catch (err) {
    throw err;
  }
});

// deploy: https://vsesoki.ru/collection/proraschivateli/product/proraschivatel-mikroferma-easygreen-egl-55
