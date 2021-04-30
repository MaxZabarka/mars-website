const planetElement = document.querySelector(".planet-wrapper")

const backgroundElement = document.querySelector(".background")
const getScrollMaxY = () => {
  return window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
}
window.addEventListener("scroll", () => {
  requestAnimationFrame(updateParallax)
})
const updateParallax = () =>  {
  // document.body.style.backgroundPosition = "center "+ window.scrollY/ getScrollMaxY()*100+"%"
  planetElement.style.top = "-"+window.scrollY/ getScrollMaxY()*100+"px"
  backgroundElement.style.top = "-"+window.scrollY/ getScrollMaxY()*50+"px"

  console.log(window.scrollY/ getScrollMaxY());
  // requestAnimationFrame(updateParallax)
}
