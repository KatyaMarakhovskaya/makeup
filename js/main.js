
function connectionShow(){ 
 document.querySelector(".connection").style.display="block";
};
function connectionHide(){ 
 document.querySelector(".connection").style.display="none";
};



$(function () {
	$('.button').click(function () {
		$('.block').css('background','red');
		$('.block').animate({
			margin: '500px'
		}, 6600);
	});

	$(window).scroll(function() {
	  $(".block").each(function() {
	    var elPos = $(this).offset().top;
	    var topOfWindow = $(window).scrollTop();
	    if (elPos < topOfWindow + 700) {
	      $(this).addClass("fadeInLeft");
	    }
	  });
	});

		// grab the initial top offset of the navigation 
   	var stickyNavTop = $('.nav').offset().top;
   	
   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('.nav').addClass('sticky');
	    } else {
	        $('.nav').removeClass('sticky'); 
	    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
		600:{
            items:2
        },
      	951:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


});
