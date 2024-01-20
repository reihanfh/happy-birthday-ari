// Music Player
var track = document.getElementById("track");
const carousel = new bootstrap.Carousel("#myCarousel");

var audio = document.getElementById("track");
audio.volume = 1;
function play() {
	track.play();
	$("#cover").hide();
}

// Open Cover
$(window).on("load", function () {
	// $("#cover").modal("show");
});

// Aos
// openBtn.on("click", function () {
// 	playPause();
// });
