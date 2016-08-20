/* Thanks for Marius Craciunoiu on https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.54wpvo8dt for the inspiration for the idea */

var lastScrollTop = 0;
var didScroll = false;
var delta = 5; 

/* Added so jquery will not queue animations and continue moving even after the person stopped scrolling */
var moving = false; 
var nav = $('nav');

/* Add event to scroll function of window to say that the window was scrolled */
$(window).scroll(function (event) {
	didScroll = true;
});

/* Sets and event every 150ms that checks if the window was moveNavd */
setInterval(function() {
	if (!moving && didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 300);

function hasScrolled() {
	var st = $(this).scrollTop();

	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	moving = true;
	var navbarHeight = nav.outerHeight();
	
	if (st > lastScrollTop && st > navbarHeight){
		moveNav(-navbarHeight);
	} else {
		moveNav(0);
	}

	lastScrollTop = st;
}

function moveNav(newTop) {
	nav.animate({top: newTop}, 175, function() {
		moving = false;
	});
}