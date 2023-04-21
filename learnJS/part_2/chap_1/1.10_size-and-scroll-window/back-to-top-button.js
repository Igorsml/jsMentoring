const backToTopBtn = document.querySelector(".back-to-top-button");

function scrollToTop() {
  console.log("click");
  window.addEventListener("scroll", (e) => {
    window.pageYOffset > 500
      ? backToTopBtn.classList.add("show")
      : backToTopBtn.classList.remove("show");
  });

  return window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollToTop();
