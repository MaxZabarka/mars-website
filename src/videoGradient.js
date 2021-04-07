const videoElement = document.querySelector("video");
const overlayElement = document.querySelector(".overlay");

window.addEventListener("resize", function (event) {
  const videoHeight = videoDimensions(videoElement).height;
  overlayElement.style.height = videoHeight + "px";
  jumbotronWidth = document.querySelector(".jumbotron").clientWidth;
});

videoElement.onloadeddata = function () {
  const videoHeight = videoDimensions(videoElement).height;
  overlayElement.style.height = videoHeight + "px";
};
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
