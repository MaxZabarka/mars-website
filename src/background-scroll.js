
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  const videoElement = document.querySelector("video");

  let lastScrollPos = window.scrollY
  let currentScrollPos = lastScrollPos

  const scrollSpeed = 100
  const videoSpeed = 0.003
  function scrollPlay() {
    currentScrollPos = window.scrollY || document.documentElement.scrollTop
    const difference = currentScrollPos - lastScrollPos
    lastScrollPos = currentScrollPos
    videoElement.currentTime = (videoElement.currentTime + (difference)/scrollSpeed + videoSpeed) % 60
    window.requestAnimationFrame(scrollPlay)
  }
  window.requestAnimationFrame(scrollPlay)
}
