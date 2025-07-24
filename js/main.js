const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const nav = document.querySelectorAll(".nav");
nav.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("nav--expanded");
  })
);

document.querySelector(".nav__overlay").addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("nav--expanded");
});

