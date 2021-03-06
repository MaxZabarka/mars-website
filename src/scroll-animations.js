import sal from "sal.js";
const button = document.querySelector(".jumbotron__content__button");
const addButtonStyle = "border 0.5s ease, background 0.5s ease !important";
window.onload = function () {
  sal();
  button.style.transition =
    getComputedStyle(document.querySelector(".jumbotron__content__button"))
      .transition +
    ", " +
    "border 0.5s ease, background 0.5s ease";
  console.log(
    getComputedStyle(document.querySelector(".jumbotron__content__button"))
      .transition
  );
};
