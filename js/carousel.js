var carousels = document.getElementsByClassName("carousel-container");

for (var index = 0; index < carousels.length; index++) {
	showSlides(carousels[index], 0);
}

function next(carouselId, n) {
	var carousel = getCarousel(carouselId);
	showSlides(carousel, carousel.getAttribute('slideIndex') + 1);
}

function previous(carouselId, n) {
	var carousel = getCarousel(carouselId);
	showSlides(carousel, carousel.getAttribute('slideIndex') - 1);
}

function showSlide(carouselId, n) {
	showSlides(getCarousel(carouselId), n);
}

function showSlides(carousel, n) {
	var slides = carousel.getElementsByClassName("slide");
	var dots = carousel.getElementsByClassName("dot");

	slideIndex = mod(n, slides.length);
	for (var i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        dots[i].className = dots[i].className.replace(" active", "");
	}

	carousel.setAttribute("slideIndex", slideIndex);
	slides[slideIndex].className += " active";
	dots[slideIndex].className += " active";
}

function mod(dividend, divisor) {
	return ((dividend % divisor) + divisor) % divisor;
}

function getCarousel(carouselId) {
	return document.getElementById(carouselId);
}
