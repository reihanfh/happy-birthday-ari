// Music Player
var track = document.getElementById("track");
const carousel = new bootstrap.Carousel("#myCarousel");

var audio = document.getElementById("track");
audio.volume = 1;
function play() {
	track.play();
	$("#cover").hide();
}

// Countdown Timer

// Set the date we're counting down to
var countDownDate = new Date("01/22/2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("minutes").innerHTML = 0;
		document.getElementById("seconds").innerHTML = 0;
		document.getElementById("open").disabled = false;
	}
}, 1000);
