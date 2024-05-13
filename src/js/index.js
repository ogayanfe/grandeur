const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
if (hamburger) {
  hamburger.addEventListener("click", () => {
    if (!menu) return;
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  });
}

const closeElement = document.querySelector("#close-button");
if (closeElement) {
  closeElement.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
}
