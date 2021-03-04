const hamburgerToggleElement = document.getElementById("nav-icon4")
const hamburgerMenuElement = document.getElementById("hamburger-menu")
console.log(hamburgerMenuElement)
hamburgerToggleElement.addEventListener("click", () => {
  hamburgerToggleElement.classList.toggle("open")
  hamburgerMenuElement.classList.toggle("hamburger-closed")
})
