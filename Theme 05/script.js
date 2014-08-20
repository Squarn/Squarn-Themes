	// By Squarn Themes
	// Causes .tagline and .aside to stick when $window is scrolled
$(document).ready(function(){
		// $(function(){
	 //        var header = $('.top_header').offset().top;
	 //        //$(".top_header").addClass("sticktop");
	 //        $(window).scroll(function(){
  //               if( $(window).scrollTop() < header ) { $('.top_header').addClass('sticktop'); } 
  //               else { $('.top_header').removeClass('sticktop'); }
	 //        });
		// });
	
		$(function(){
			$('article').mouseenter(
				function(){
					$('.meta', this).stop().slideDown("slow","easeOutBounce");
					$(this).css("marginBottom",0);
				}
			);
			$('article').mouseleave(
				function(){
					$('.meta', this).stop().slideUp(600,"easeInBack");
					$(this).css("marginBottom",30);
				}
			);	
		});

		$(function(){
	        var tagline = $('.tagline').offset().top;
	          
	        $(window).scroll(function(){
                if( $(window).scrollTop() > tagline ) { $('.tagline').addClass('stickt'); } 
                else { $('.tagline').removeClass('stickt'); }

                if($('.tagline').hasClass("stickt"))
                {
                	$('.pagn').fadeIn();
                	$('.pagp').fadeIn();
                }
                else
                {
                	$('.pagn').hide();
                	$('.pagp').hide();
                }
	        });
		});

		$(function(){
	        var aside = $('aside').offset().top - 50;
	          
	        $(window).scroll(function(){
                if( $(window).scrollTop() > aside ) {
                        $('aside').addClass('sticka');
                } else {
                        $('aside').removeClass('sticka');
                }
	        });
		});

		$( ".nav" ).hover(
			function() {$(this).stop().animate({opacity: 0.5, paddingLeft: "10",}, 1000, "easeOutBounce", function() {});},
			function() {$(this).stop().animate({opacity: 1, paddingLeft: "0",}, 1000, "easeOutBounce", function() {});}
		);
});