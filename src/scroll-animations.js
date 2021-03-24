import sal from "sal.js";
import openAnimation from "./intro-animation.js";
const button = document.querySelector(".jumbotron__content__button");
const addButtonStyle = "border 0.5s ease, background 0.5s ease !important";
const planet = document.getElementsByClassName('planet')[0]


window.onload = function () {
  setTimeout(() => {
    openAnimation(() => {
      sal({threshold:0.1,once:true});
      button.style.transition =
        getComputedStyle(document.querySelector(".jumbotron__content__button"))
          .transition +
        ", " +
        "border 0.5s ease, background 0.5s ease";
      console.log(
        getComputedStyle(document.querySelector(".jumbotron__content__button"))
          .transition
      );
              planet.classList.add("planet-bright")

    });
  },1000)

};
