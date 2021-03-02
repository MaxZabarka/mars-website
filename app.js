
let jumbotronWidth =document.querySelector(".jumbotron").clientWidth
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
  console.log(videoHeight);
  jumbotronWidth =document.querySelector(".jumbotron").clientWidth
});

videoElement.onloadeddata = function () {
  videoHeight = videoDimensions(videoElement).height;
  overlayElement.style.height = videoHeight + "px";
};

function doSpin(event) {
  const mouseX = event.clientX
  console.log(mouseX/jumbotronWidth*60)
  videoElement.currentTime = mouseX/jumbotronWidth*60
}
