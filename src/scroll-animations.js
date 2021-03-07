import sal from "sal.js";
import openAnimation from "./intro-animation.js";
const button = document.querySelector(".jumbotron__content__button");
const addButtonStyle = "border 0.5s ease, background 0.5s ease !important";
window.onload = function () {
  setTimeout(() => {
    openAnimation(() => {
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
    });
  },1000)

};
