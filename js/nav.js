/* Thanks for Marius Craciunoiu on https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.54wpvo8dt for the inspiration for the idea */

var lastScrollTop = 0;
var didScroll = false;
const delta = 5;
const activeClass = 'is-active';

/* Added so jquery will not queue animations and continue moving even after the person stopped scrolling */
var moving = false;
const nav = $('#top-bar');
const sideBar = $('#side-bar');
const hamburger = $('#nav-burger');

sideBar.css('left', -sideBar.outerWidth());

/* Add event to scroll function of window to say that the window was scrolled */
$(window).scroll(function (event) {
	didScroll = true;
});

/* Sets and event every 150ms that checks if the window was moved */
setInterval(function() {
	if (!moving && didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 300);

/* Verifies if there was a scrolling action since last movement */
function hasScrolled() {
	const st = $(this).scrollTop();

	if (Math.abs(lastScrollTop - st) <= delta)
		return;

	moving = true;
	const navbarHeight = nav.outerHeight();

	if (st > lastScrollTop && st > navbarHeight){
		moveNav(-navbarHeight);
	} else {
		moveNav(0);
	}

	lastScrollTop = st;
}

/* Moves the superior nav vertically */
function moveNav(newTop) {
	nav.animate({top: newTop}, 175, function() {
		moving = false;
	});
}

/* Turns the menu on and off */
function toggleSidebar() {
	var hamburgerSize = hamburger.outerWidth();
	var hamburgerDistance = $(window).width() * 0.02;

	var sideBarDuration = 200;
	var sidebarWidth = sideBar.outerWidth();

	var hamburgerDelay = ((hamburgerDistance + hamburgerSize) / sidebarWidth) * sideBarDuration;

	var hamburgerDuration = sideBarDuration - hamburgerDelay;

	if (hamburger.hasClass(activeClass)) {
		sideBar.animate({left: -sidebarWidth}, sideBarDuration);
		hamburger.animate({left: hamburgerDistance}, hamburgerDuration);
		hamburger.removeClass(activeClass);
	} else {
		var leftDistance = sidebarWidth - (hamburgerDistance + hamburgerSize);

		sideBar.animate({left: 0}, sideBarDuration);
		hamburger.delay(hamburgerDelay).animate({left: leftDistance}, hamburgerDuration);
		hamburger.addClass(activeClass);
	}
}
