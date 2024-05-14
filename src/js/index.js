import Glide from "@glidejs/glide";
import emailjs from "@emailjs/browser";

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

// GLIDE JS
const glideClasses = ["glide", "glide-two"];
glideClasses.forEach((className) => {
  new Glide("." + className, {
    type: "carousel",
    autoplay: 3000,
    keyboard: true,
    hoverpause: false,
    focusAt: 1,
    startAt: 1,
  }).mount();
});

// Emailjs
emailjs.init({
  publicKey: "CS7Xt2RFMP42C2zee",
});

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h4q4tsm", "template_ele2ubh", "#contact-form")
      .then(
        () => {
          alert("Message Submitted Successfully");
        },
        (e) => {
          console.log(e);
          alert("Couldn't submit form");
        },
      );
  });
}

const dateField = document.querySelector("#date-field");
if (dateField) {
  dateField.value = `${new Date()}`;
}
