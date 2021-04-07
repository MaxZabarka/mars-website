const slideTopElement = document.getElementById("slide-top")
const slideBottomElement = document.getElementById("slide-bottom")

export default (cb) => {
  slideTopElement.classList.add("slide-open")
  slideBottomElement.classList.add("slide-open")
  slideTopElement.addEventListener("transitionend", cb)
}
