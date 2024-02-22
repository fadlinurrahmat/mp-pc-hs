const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitiondend", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("active");
  });
});

document.querySelectorAll(".navbar-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.querySelector(".navbar-dropdown").style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    item.querySelector(".navbar-dropdown").style.display = "none";
  });
});

// cta
var copy = document.querySelector(".class_slide").cloneNode(true);
document.querySelector(".cta_content_class").appendChild(copy);

// partner
var copy = document.querySelector(".logo_slide").cloneNode(true);
document.querySelector(".container_logo_partner").appendChild(copy);

// faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    var pannel = this.nextElementSibling;

    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}
