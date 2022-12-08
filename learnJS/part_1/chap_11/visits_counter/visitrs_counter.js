const visitsCounter = () => {
  const countEl = document.getElementById("view-counter");
  const host = window.location.host;
  const path = window.location.pathname;
  const url = `https://api.countapi.xyz/hit/${host}`;

  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      countEl.innerHTML = response.value;
    })
    .catch((err) => {
      console.log("visitsCounter error:", { cause: err });
    });
};

visitsCounter();

// deploy: https://vsesoki.ru/blogs/blog/moschnye-blendery-po-vygodnym-tsenam
