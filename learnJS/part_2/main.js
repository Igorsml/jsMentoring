const acc = document.querySelectorAll(".accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    panel.style.maxHeight
      ? (panel.style.maxHeight = null)
      : (panel.style.maxHeight = panel.scrollHeight + "px");
  });
}

const images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
  const randomDirection = Math.floor(Math.random() * 2);
  const randomRotation = Math.floor(Math.random() * 360);

  if (randomDirection === 1) randomRotation = -randomRotation;

  images[i].style.transform = `rotate(${randomRotation}deg)`;
}
