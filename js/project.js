// Toggle nav menu
$(".js--nav-toggle").click(function() {
	$(".sidebar nav").toggle();
	$(".sidebar footer").toggle();
	if ( $(this).hasClass("js--nav-toggle--to-x") ) {
		$(this).removeClass("js--nav-toggle--to-x");
		$(this).addClass("js--nav-toggle--from-x");
	}
	else {
		$(this).removeClass("js--nav-toggle--from-x");
		$(this).addClass("js--nav-toggle--to-x");
	}
});

// Provide fallbacks for SVG images
if (!Modernizr.svg) {
  $(".brand").attr("src", "img/cheetyr-logo.png");
  $(".wl-brand").attr("src", "img/william-leeks_logo.png");
}

// Initiate live filter
$(function() {
    $('#search-sheet').fastLiveFilter('.command-list');
});