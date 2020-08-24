$(function(){
	"use strict"
	// $('.header').height($(window).height());
	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	 $('.imag img').mouseenter(function(){
	 	$(this).next('.teamlayer').fadeIn();
	 });
	 $('.imag .teamlayer').mouseleave(function(){
	 	$(this).fadeOut();
	 });
});