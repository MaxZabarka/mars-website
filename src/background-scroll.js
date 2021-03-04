let jumbotronWidth = document.querySelector(".jumbotron").clientWidth;
let jumbotronHeight = document.querySelector(".jumbotron").clientHeight;

const videoElement = document.querySelector("video");


let lastScrollPos = window.pageYOffset
let currentScrollPos = lastScrollPos

if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  const scrollSpeed = 100
  const videoSpeed = 0.003
  function scrollPlay() {
    currentScrollPos = window.pageYOffset || document.documentElement.scrollTop
    const difference = currentScrollPos - lastScrollPos
    lastScrollPos = currentScrollPos

    videoElement.currentTime = (videoElement.currentTime + (difference)/scrollSpeed + videoSpeed) % 60

    window.requestAnimationFrame(scrollPlay)
  }
  window.requestAnimationFrame(scrollPlay)
}
