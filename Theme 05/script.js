$(document).ready(function(){
	// By Squarn Themes
		
		// Particleground load
		$('#particles').particleground({
            minSpeedX: 0.1,
            maxSpeedX: 0.1,
            minSpeedY: 0.1,
            maxSpeedY: 0.1,
            directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
            directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
            density: 10000, // How many particles will be generated: one particle every n pixels
            dotColor: '#3d3d3d',
            lineColor: '#666666',
            particleRadius: 10, // Dot size
            lineWidth: 0.5,
            curvedLines: false,
            proximity: 120, // How close two dots need to be before they join
            parallax: true,
            parallaxMultiplier: 8, // The lower the number, the more extreme the parallax effect
            onInit: function() { console.log("Particles initiated properly."); },
            onDestroy: function() {}
        });

		// Meta slide down
		$(function(){
			$('article').mouseenter(
				function(){
					$('.meta', this).stop().slideDown(1000,"easeOutBounce");
					//$(this).css("marginBottom",0);
				}
			);
			$('article').mouseleave(
				function(){
					$('.meta', this).stop().slideUp(300,"linear");
					//$(this).css("marginBottom",30);
				}
			);	
		});

		// Tagline Stick
		$(function(){
			var tagline = $('.tagline').offset().top - 5;

			$(window).scroll(function(){
				if( $(window).scrollTop() > tagline ) { $('.tagline').addClass('stickt'); } 
				else { $('.tagline').removeClass('stickt'); }

				// Pagination Fade In
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
			// Sidebar Stick
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
			function() {$(this).stop().animate({opacity: 0.5, paddingLeft: "10"}, 300, "easeOutBounce", function() {});},
			function() {$(this).stop().animate({opacity: 1, paddingLeft: "0"}, 300, "easeOutBounce", function() {});}
		);

		if ( document.referrer === null || document.referrer.indexOf(window.location.hostname) < 0 ) 
		{
			
		}

		else {$('#particles').particlegound('destroy');}

		$(".poop").click(function() {
			$(".postbody").fadeOut();
			$(".help").fadeIn();
		});
});