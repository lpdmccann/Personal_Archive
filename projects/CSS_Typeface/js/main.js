$(document).ready(function() {
	$(this).scrollTop(0);
	var distance = 100;
	var classes = [
			".onehoroutlines",
			".oneveroutlines",
			".onehoroffsetlines",
			".oneveroffsetlines",
			".onehorcentlines",
			".onevercentlines",
			".horoutlines",
			".veroutlines",
			".horoffsetlines",
			".veroffsetlines",
			".horcentlines",
			".vercentlines",
			".curvelines",
			//".diaglines",
			".curves",
			".diasmall",
			".diabig",
			".horcent",
			".vercent",
			".hortop",
			".horbot",
			".verright",
			".verleft",
			".horoutlines2",
			".veroutlines2"
		];

	$('.page, .page2').css("height", ((classes.length + 15) * distance));	
	$( document ).on('scroll', function(event){
		var scrollPosition = $( document ).scrollTop();
		console.log("scroll position = " + scrollPosition);
		//var visible = $().css('visibility', 'visible')

		var fadeFast = 1000;
		var fadeMedium = 2000;
		var fadeSlow = 5000;

		if (scrollPosition <= (classes.length * distance)) {
			for (var i = 0; i < classes.length; i++) {
				var singleClass = classes[i];
				var opacity = (scrollPosition > (i) * distance) ? 1: 0;
				var x = $(singleClass).css("opacity", opacity);
				if (opacity === 1) {
					x.fadeIn(fadeFast);
				} else {
					x.fadeOut(fadeFast);
				}
			}
		}

		if (scrollPosition > ((classes.length - 2) * distance)) {
			$('.row10').css("opacity", 1).fadeIn(fadeMedium);
			console.log('ifOne');
		}

		if (scrollPosition > ((classes.length - 1) * distance)) {
			$('.row0').css("opacity", 1).fadeIn(fadeMedium);
			console.log('ifTwo');
		}

		if (scrollPosition > ((classes.length) * distance) && scrollPosition <= ((classes.length +3) * distance)) {
			$('.lines').fadeOut(fadeMedium);
			$('.page2').fadeOut(fadeMedium);
			console.log('ifThree');
		}

		if (scrollPosition <= ((classes.length) * distance) &&  scrollPosition >= ((classes.length - 2) * distance)) {
			$('.lines').css("opacity", 1).fadeIn(fadeMedium);
			console.log('ifFour');
		}

		 if (scrollPosition > ((classes.length + 3) * distance)) {
		 	$('.lines').css("opacity", 1).fadeIn(fadeMedium);
		 	$('.page2').css("opacity", 1).fadeIn(fadeMedium);
		 	$('.row0 .curvelines').css("opacity", 0).fadeOut(fadeMedium);
		 	console.log('ifFive');
		}


		// if(scrollPosition === 0) {
		// 	console.log("Scroll equals 0");
		// 	$('.onehoroutlines').css('visibility', 'hidden');
		// } else if(scrollPosition > 0 && scrollPosition < 1000) {
		// 	console.log("0 to 1000");
		// 	var x = $('.onehoroutlines').css('visibility', 'visible')
		// 	if (visibility) x.fadeTo(2000, 1);
		// 	$('.oneveroutlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 1000 && scrollPosition < 2000) {
		// 	console.log("1000 to 2000");
		// 	$('.oneveroutlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.onehoroffsetlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 2000 && scrollPosition < 3000) {
		// 	console.log("2000 to 3000");
		// 	$('.onehoroffsetlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.oneveroffsetlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 3000 && scrollPosition < 4000) {
		// 	console.log("3000 to 4000");
		// 	$('.oneveroffsetlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.onehorcentlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 4000 && scrollPosition < 5000) {
		// 	console.log("4000 to 5000");
		// 	$('.onehorcentlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.onevercentlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 5000 && scrollPosition < 6000) {
		// 	console.log("5000 to 6000");
		// 	$('.onevercentlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.horoutlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 6000 && scrollPosition < 7000) {
		// 	console.log("6000 to 7000");
		// 	$('.horoutlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.veroutlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 7000 && scrollPosition < 8000) {
		// 	console.log("7000 to 8000");
		// 	$('.veroutlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.horoffsetlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 8000 && scrollPosition < 9000) {
		// 	console.log("8000 to 9000");
		// 	$('.horoffsetlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.veroffsetlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 9000 && scrollPosition < 10000) {
		// 	console.log("9000 to 10000");
		// 	$('.veroffsetlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.horcentlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 10000 && scrollPosition < 11000) {
		// 	console.log("10000 to 11000");
		// 	$('.horcentlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.vercentlines').css('visibility', 'hidden');
		// } else if (scrollPosition > 11000 && scrollPosition < 12000) {
		// 	console.log("11000 to 12000");
		// 	$('.vercentlines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.curvelines').css('visibility', 'hidden');
		// } else if (scrollPosition > 12000 && scrollPosition < 13000) {
		// 	console.log("12000 to 13000");
		// 	$('.curvelines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.diaglines').css('visibility', 'hidden');
		// } else if (scrollPosition > 13000 && scrollPosition < 14000) {
		// 	console.log("13000 to 14000");
		// 	$('.diaglines').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.curves').css('visibility', 'hidden');
		// } else if (scrollPosition > 14000 && scrollPosition < 15000) {
		// 	console.log("14000 to 15000");
		// 	$('.curves').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.diasmall').css('visibility', 'hidden');
		// } else if (scrollPosition > 15000 && scrollPosition < 16000) {
		// 	console.log("15000 to 16000");
		// 	$('.diasmall').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.diabig').css('visibility', 'hidden');
		// } else if (scrollPosition > 16000 && scrollPosition < 17000) {
		// 	console.log("16000 to 17000");
		// 	$('.diabig').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.horcent').css('visibility', 'hidden');
		// } else if (scrollPosition > 17000 && scrollPosition < 18000) {
		// 	console.log("17000 to 18000");
		// 	$('.horcent').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.vercent').css('visibility', 'hidden');
		// } else if (scrollPosition > 18000 && scrollPosition < 19000) {
		// 	console.log("18000 to 19000");
		// 	$('.vercent').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.hortop').css('visibility', 'hidden');
		// } else if (scrollPosition > 19000 && scrollPosition < 20000) {
		// 	console.log("19000 to 20000");
		// 	$('.hortop').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.horbot').css('visibility', 'hidden');
		// } else if (scrollPosition > 20000 && scrollPosition < 21000) {
		// 	console.log("20000 to 21000");
		// 	$('.horbot').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.verright').css('visibility', 'hidden');
		// } else if (scrollPosition > 21000 && scrollPosition < 22000) {
		// 	console.log("21000 to 22000");
		// 	$('.verright').css('visibility', 'visible').fadeTo(2000, 1);
		// 	$('.verleft').css('visibility', 'hidden');
		// } else if (scrollPosition > 22000 && scrollPosition < 23000) {
		// 	console.log("22000 to 23000");
		// 	$('.verleft').css('visibility', 'visible').fadeTo(2000, 1);
		// } else if (scrollPosition > 23000) {
		// 	console.log("greater than 23000");
		// 	$('.lines').fadeOut(5000);
		// }
	});
});