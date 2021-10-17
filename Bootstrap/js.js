// JavaScript Document

//scroll

$('.page-scroll').on('click', function(e){
	"use strict";

//Ambil isi href
	var href = $(this).attr('href');
	
// Tangkap elemen ybs
	var elemenhref = $(href);
	
//Pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenhref.offset().top - 50
	}, 1000, 'easeInOutExpo');
	
	e.preventDefault();
	
});














//parallax

$(window).scroll(function() {
	"use strict";
	
	//Jumbotron
	var parallax = $(this).scrollTop();
	
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ parallax/7 +'%)'
	});
	
	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ parallax/2.5 +'%)'
	});
	
	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ parallax/1.2 +'%)'
	});
	
	
	
	
	//Biodata
	if(parallax > $('.biodata .row').offset().top - 600){
		$('.biodata .row').each(function(i){
			setTimeout(function(){
				$('.biodata .row').eq(i).addClass('show');	
			}, 300 * (i));
		});
	}
	
	
	
	
	//Portfolio
	if(parallax > $('.portfolio .row').offset().top - 600){
		$('.portfolio .row').each(function(i){
			setTimeout(function(){
				$('.portfolio .row').eq(i).addClass('show');	
			}, 300 * (i));
		});
	}
	
	
	
	
	
	//Wisata
	if(parallax > $('.sidoarjotour .row').offset().top - 600){
		$('.sidoarjotour .row').each(function(i){
			setTimeout(function(){
				$('.sidoarjotour .row').eq(i).addClass('show');	
			}, 1000 * (i));
		});
	}
	
	
	
	
	
	//about
	if(parallax > $('.about .row').offset().top - 600){
		$('.about .row').each(function(i){
			setTimeout(function(){
				$('.about .row').eq(i).addClass('show');	
			}, 300 * (i));
		});
	}
	
	
	
	
	
	
	
	//contact
	if(parallax > $('.contact .row').offset().top - 600){
		$('.contact .row').each(function(i){
			setTimeout(function(){
				$('.contact .row').eq(i).addClass('show');	
			}, 300 * (i));
		});
	}
	
	
	
	
	
	
	
	
	
	
	
});













