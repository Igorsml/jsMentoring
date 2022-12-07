const countEl = document.getElementById("view-counter");

function visitsCounter() {
  fetch("https://api.countapi.xyz/info/vsesoki.ru/blog")
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    })
    .catch((err) => {
      console.log("visitsCounter error:", err.message, { cause: err });
    });
}

// deploy: https://vsesoki.ru/blogs/blog/moschnye-blendery-po-vygodnym-tsenam
