var carousels = document.getElementsByClassName("carousel");
var carouselsMap = new Object();
var slideIndex = new Object();

for (var index = 0; index < carousels.length; index++) {
	carouselsMap[carousels[index].id] = carousels[index];
	slideIndex[carousels[index].id] = 0;
	showSlide(carousels[index].id, 0);
}

function next(carouselId) {
	showSlide(carouselId, slideIndex[carouselId] + 1);
}

function previous(carouselId) {
	showSlide(carouselId, slideIndex[carouselId] - 1);
}

function showSlide(carouselId, n) {
	var carousel = carouselsMap[carouselId];
	var slides = carousel.getElementsByClassName("slide");
	var dots = carousel.getElementsByClassName("dot");

	var newSlideIndex = mod(n, slides.length);
	var oldSlideIndex = slideIndex[carouselId];

	// Remove active from old slide
	removeActive(slides[oldSlideIndex]);
	removeActive(dots[oldSlideIndex]);

	// Add active to new slide
	slides[newSlideIndex].className += " active";
	dots[newSlideIndex].className += " active";

	// Replace slideIndex
	slideIndex[carouselId] = newSlideIndex;
}

function mod(dividend, divisor) {
	return ((dividend % divisor) + divisor) % divisor;
}

function removeActive(item){
	item.className = item.className.replace("active", "");
}
