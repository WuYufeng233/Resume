(function ($) {

	"use strict";

	// PRE LOADER
	$(window).load(function () {
		$('.preloader').fadeOut(1000); // set duration in brackets    
	});

	// MENU
	$('.navbar-collapse a').on('click', function () {
		$(".navbar-collapse").collapse('hide');
	});

	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});


	// HOME SLIDER & projects 
	// $('.home-slider').owlCarousel({
	// 	animateOut: 'fadeOut',
	// 	items: 1,
	// 	loop: false,
	// 	dots: false,
	// 	autoplayHoverPause: true,
	// 	autoplay: false,
	// 	smartSpeed: 1000,
	// })

	$('.owl-projects').owlCarousel({
		animateOut: 'fadeOut',
		loop: true,
		autoplayHoverPause: true,
		autoplay: false,
		smartSpeed: 1000,
		dots: false,
		nav: true,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>'
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 3,
			}
		}
	});

	$('.owl-client').owlCarousel({
		animateOut: 'fadeOut',
		loop: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 3,
			}
		}
	});


	// SMOOTHSCROLL
	$(function () {
		$('.custom-navbar a, #home a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 49
			}, 1000);
			event.preventDefault();
		});
	});

	// 一些emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
	// 添加鼠标点击事件
	document.body.onload = function () {
		var click_cnt = 0;
		var $html = document.getElementsByTagName("html")[0];
		var $body = document.getElementsByTagName("body")[0];
		const emojiArr = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😚', '😙', '😗', '😘', '😍', '😇', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '🤡', '🤠',
			'😒', '😏', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😥', '😢', '😨', '😱', '😳', '😵', '😲', '😮', '😧', '🤤', '😭', '😪', '😴', '🙄', '🤔', '😬', '🤥', '🤐', '💩', '👺', '👹', '👿', '😈', '🤕', '🤒', '😷', '🤧', '🤢', '👻', '💀', '☠', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '🙏', '👏', '🙌', '👐', '😾', '😿', '🙀', '😽', '😼', '😻'
		];
		$html.onclick = function (e) {
			var $elem = document.createElement("b");
			$elem.style.color = "#E94F06";
			$elem.style.zIndex = 9999;
			$elem.style.position = "absolute";
			$elem.style.select = "none";
			var x = e.pageX;
			var y = e.pageY;
			$elem.style.left = (x - 10) + "px";
			$elem.style.top = (y - 20) + "px";
			clearInterval(anim);
			var randomNum = Math.floor(Math.random() * emojiArr.length);
			$elem.innerText = emojiArr[randomNum];
			$elem.style.fontSize = Math.random() * 10 + 8 + "px";
			var increase = 0;
			var anim;
			setTimeout(function () {
				anim = setInterval(function () {
					if (++increase == 150) {
						clearInterval(anim);
						$body.removeChild($elem);
					}
					$elem.style.top = y - 20 - increase + "px";
					$elem.style.opacity = (150 - increase) / 120;
				}, 8);
			}, 70);
			$body.appendChild($elem);
		};
	};

})(jQuery);