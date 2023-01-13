const inputs = document.querySelectorAll("input");

inputs.addEventListener("keydown", (event) => {
  if (event.code === "Backspace") return false;
});

document.addEventListener("keydown", (event) => {
  try {
    if (event.code === "Backspace") {
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
