$(document).ready(function(){
	var nav= $('.navbar-fixed-top');
	var distancia = $('.navbar-fixed-top').offset();
	if (distancia.top > 0) {
		nav.removeClass('normal').addClass('efecto');
	}
	$(window).scroll(function(){
		var scroll= $(window).scrollTop();

		if(scroll >= 600){
			nav.removeClass('normal').addClass('efecto');
		} else{
			nav.removeClass('efecto').addClass('normal');
		}
	});

	$('section#team a').on('click', function(){
		$('#modal img').attr('src', $(this).attr('data-image-url'));
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('logo'),
	  handler: function() {
	    $('section#principal #logo').addClass('animated zoomInDown')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima1'),
	  handler: function() {
	    $('section#app #anima1').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima2'),
	  handler: function() {
	    $('section#app #anima2').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima3'),
	  handler: function() {
	    $('section#app #anima3').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima4'),
	  handler: function() {
	    $('section#app #anima4').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima1'),
	  handler: function() {
	    $('section#team #anima1').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima2'),
	  handler: function() {
	    $('section#team #anima2').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima3'),
	  handler: function() {
	    $('section#team #anima3').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('anima4'),
	  handler: function() {
	    $('section#team #anima4').addClass('animated fadeInUp')
	  },
	  offset: '95%'
	});

	var waypoint = new Waypoint({
	  element: document.getElementById('appCentral'),
	  handler: function() {
	    $('#appCentral').addClass('animated fadeInDownBig')
	  },
	  offset: '60%'
	});

});

smoothScroll.init({
    speed: 700, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});
