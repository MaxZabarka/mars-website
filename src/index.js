import "./main.css"
let jumbotronWidth = document.querySelector(".jumbotron").clientWidth;
let jumbotronHeight = document.querySelector(".jumbotron").clientHeight;

let lastScroll = 0;
let videoTime = 0;

let lastUpdate = null;
function videoDimensions(video) {
  // Ratio of the video's intrisic dimensions
  var videoRatio = video.videoWidth / video.videoHeight;
  // The width and height of the video element
  var width = video.offsetWidth,
    height = video.offsetHeight;
  // The ratio of the element's width to its height
  var elementRatio = width / height;
  // If the video element is short and wide
  if (elementRatio > videoRatio) width = height * videoRatio;
  // It must be tall and thin, or exactly equal to the original ratio
  else height = width / videoRatio;
  return {
    width: width,
    height: height,
  };
}

videoElement = document.querySelector("video");
overlayElement = document.querySelector(".overlay");

window.addEventListener("resize", function (event) {
  videoHeight = videoDimensions(videoElement).height;
  overlayElement.style.height = videoHeight + "px";
  jumbotronWidth = document.querySelector(".jumbotron").clientWidth;
});

videoElement.onloadeddata = function () {
  videoHeight = videoDimensions(videoElement).height;
  overlayElement.style.height = videoHeight + "px";
};

function doSpin(event) {
  // const mouseX = event.clientX
  // const newPosition = Math.round(mouseX/jumbotronWidth*60*10)/10
  // if (newPosition !== lastUpdate) {
  //   videoElement.currentTime = newPosition
  // }
}
function capRange(number,min,max) {
  if (number < min) return min
  if (number > max) return max
  return number
}
window.onscroll = () => {
  scrollAmount = window.scrollY;
  videoTime += capRange(Math.abs(scrollAmount - lastScroll)/2,0,5);
  console.log(capRange(Math.abs(scrollAmount - lastScroll)/2,0,5))
  lastScroll = scrollAmount;
  videoElement.currentTime = (videoTime / jumbotronHeight) * 60 % 60;
};
