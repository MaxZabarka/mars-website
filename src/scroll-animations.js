// import sal from "sal.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import openAnimation from "./intro-animation.js";
const button = document.querySelector(".jumbotron__content__button");
const planet = document.getElementsByClassName('planet')[0]


window.onload = function () {
  setTimeout(() => {
    openAnimation(() => {
      AOS.init({duration:2000,mirror:true,offset:120,once:true});
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
