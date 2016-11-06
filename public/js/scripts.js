// Main Javascript File
$(document).ready(function(){

	// Mobile Nav
	$('#header__navButton').click(function(){
		$('#header__nav').fadeToggle('fast');
	});

	// Modal
	function modalOpen() {
		$('#galleryModal').addClass('visible').fadeIn(200);
		console.log('modal in');
	}
	function modalClose() {
		$('#galleryModal').removeClass('visible').fadeOut(200);
		console.log('modal out');
	}

	// Gallery Slideshow
	var sliderImages = [];
	$('[data-slide]').each(function(){
		var div = document.createElement('DIV');
		var bg = $(this).attr('data-slide');
		$(this).closest('.thumbWrapper').find('.thumbActions').clone().prependTo(div);
		var css = 'url(' + bg + ')';
		$(div).css('backgroundImage',css);//.html(actions);
		$('#galleryModal__slideContainer').append(div);
		$(this).click(function(){
			modalOpen();
		});
	});
	$('#galleryModal__close').click(function(){
		modalClose();
	});
	$('#galleryModal__slider').flexslider({
		selector: '#galleryModal__slideContainer > div',
		directionNav: true,
		nextText: "arrow_forward",
		prevText: "arrow_back",
		slideshow: false,
		manualControls: '[data-slide]',
		before: function(){
			console.log('transition');
		}
	});

	// Thumbnail caption overlay
	$('.thumbWrapper .thumbActions__action--showCaption').hover(function(){
		$(this).closest('.thumbWrapper').addClass('thumbWrapper--toggleOverlay');
	},function(){
		$(this).closest('.thumbWrapper').removeClass('thumbWrapper--toggleOverlay');
	})

	// Scroll Nav Class
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ( scroll > 0 ){
			$('html').addClass('scroll');
		} else {
			$('html').removeClass('scroll');
		}
	});

	// Init Masonry
	Macy.init({
		container: '.grid',
		trueOrder: false,
		waitForImages: false,
		margin: 0,
		columns: 3,
		breakAt: {
			900: 2,
			640: 1
		}
	});

});
