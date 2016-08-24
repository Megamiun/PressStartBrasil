var slideIndex = 0;
showSlides(slideIndex);

function next(n) {
	showSlides(slideIndex + 1);
}

function previous(n) {
	showSlides(slideIndex - 1);
}

function showSlide(n) {
	showSlides(n);
}

/* TODO: Verificar como esse método funciona com dois carousels na mesma página */
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");

	slideIndex = mod(n, slides.length);
	for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
        dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex].className += " active";
	dots[slideIndex].className += " active";
}

function mod(dividend, divisor){
	return ((dividend % divisor) + divisor) % divisor;
}
