$(document).ready(function(){
// By Squarn Themes

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
		lineWidth: .5,
		curvedLines: false,
		proximity: 120, // How close two dots need to be before they join
		parallax: true,
		parallaxMultiplier: 8, // The lower the number, the more extreme the parallax effect
		onInit: function() {},
		onDestroy: function() {}
	});

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