$(document).ready(function() {
	$(this).scrollTop(0);

	var distance = 100;
	var scriptLines = [
			"#p222",
			"#p0",
			"#p1",
			"#p2",
			"#p3",
			"#p4",
			"#p5",
			"#p6",
			"#p7",
			"#p8",
			"#p9",
			"#p10",
			"#p11",
			"#p12",
			"#p13",
			"#p14",
			"#p15",
			"#p16",
			"#p17",
			"#p18",
			"#p19",
			"#p20",
			"#p21",
			"#p22",
			"#p23",
			"#p24",
			"#p25",
			"#p26",
			"#p27",
			"#p28",
			"#p29",
			"#p30",
			"#p31",
			"#p32",
			"#p33",
			"#p34",
			"#p35",
			"#p36",
			"#p37",
			"#p38",
			"#p39",
			"#p40",
			"#p41",
			"#p42",
			"#p43",
			"#p44",
			"#p45",
			"#p46",
			"#p47",
			"#p48",
			"#p49",
			"#p50",
			"#p51",
			"#p52",
			"#p53",
			"#p54",
			"#p55",
			"#p56",
			"#p57",
			"#p58",
			"#p59",
			"#p60",
			"#p61",
			"#p62",
			"#p63",
			"#p64",
			"#p65",
			"#p66",
			"#p67",
			"#p68",
			"#p69",
			"#p70",
			"#p71",
			"#p72",
			"#p73",
			"#p74",
			"#p75",
			"#p76",
			"#p77",
			"#p78",
			"#p79",
			"#p80",
			"#p81",
			"#p82",
			"#p83",
			"#p84",
			"#p85",
			"#p86",
			"#p87",
			"#p88",
			"#p89",
			"#p90",
			"#p91",
			"#p92",
			"#p93",
			"#p94",
			"#p95",
			"#p96",
			"#p97",
			"#p98",
			"#p99",
			"#p100",
			"#p101",
			"#p102",
			"#p103",
			"#p104",
			"#p105",
			"#p106",
			"#p107",
			"#p108",
			"#p109",
			"#p110",
			"#p111",
			"#p112",
			"#p113",
			"#p114",
			"#p115",
			"#p116",
			"#p117",
			"#p118",
			"#p119",
			"#p120",
			"#p121",
			"#p122",
			"#p123",
			"#p124",
			"#p125",
			"#p126",
			"#p127",
			"#p128",
			"#p129",
			"#p130",
			"#p131",
			"#p132",
			"#p133",
			"#p134",
			"#p135",
			"#p136",
			"#p137",
			"#p138",
			"#p139",
			"#p140",
			"#p141",
			"#p142",
			"#p143",
			"#p144",
			"#p145",
			"#p146",
			"#p147",
			"#p148",
			"#p149",
			"#p150",
			"#p151",
			"#p152",
			"#p153",
			"#p154",
			"#p155",
			"#p156",
			"#p157",
			"#p158",
			"#p159",
			"#p160",
			"#p161",
			"#p162",
			"#p163",
			"#p164",
			"#p165",
			"#p166",
			"#p167",
			"#p168",
			"#p169",
			"#p170",
			"#p171",
			"#p172",
			"#p173",
			"#p174",
			"#p175",
			"#p176",
			"#p177",
			"#p178",
			"#p179",
			"#p180",
			"#p181",
			"#p182",
			"#p183",
			"#p184",
			"#p185",
			"#p186",
			"#p187",
			"#p188",
			"#p189",
			"#p190",
			"#p191",
			"#p192",
			"#p193",
			"#p194",
			"#p195",
			"#p196",
			"#p197",
			"#p198",
			"#p199",
			"#p200",
			"#p201",
			"#p202",
			"#p203",
			"#p204",
			"#p205",
			"#p206",
			"#p207",
			"#p208",
			"#p209",
			"#p210",
			"#p211",
			"#p212",
			"#p213",
			"#p214",
			"#p215",
			"#p216",
			"#p217",
			"#p218",
			"#p219",
			"#p220",
			"#p221",
		]
	
	$('.page').css("height", ((scriptLines.length +15) * distance));
	$( document ).on('scroll', function(event){
		var scrollPosition = $( document ).scrollTop();
		console.log("scroll position = " + scrollPosition);

		var fadeFast = 1000;
		var fadeMedium = 2000;
		var fadeSlow = 5000;

		

		if (scrollPosition <= (scriptLines.length * distance)) {
			for (var i = 0; i < scriptLines.length; i++) {
				console.log('forLoop');
				var singleLine = scriptLines[i];
				var active = ((scrollPosition > (i) * distance) && (scrollPosition < (i + 2) * distance)) ? 1: 0;
				var next = ((scrollPosition > (i) * distance) && (scrollPosition < (i + 2) * distance)) ? 1: 0;
				var full = $(singleLine).css("opacity", active);
				// var full = $(singleLine).fadeIn(1000);
				// var hide = $(singleLine).fadeTo();
				// var half = $(singleLine).fadeTo(0.5, 1000);
				// var quarter = $(singleLine).fadeTo(0.25, 1000);
				if (active === 1) {
					console.log(singleLine + 'is active.');
					full.fadeIn(fadeFast);
				} else if (active === 0) {
					full.fadeOut(fadeFast);
				}
			}
		}

		// if (scrollPosition > ((scriptLines.length - 2) * distance)) {
		// 	$('.row10').css("opacity", 1).fadeIn(fadeMedium);
		// 	console.log('ifOne');
		// }

		// if (scrollPosition > ((scriptLines.length - 1) * distance)) {
		// 	$('.row0').css("opacity", 1).fadeIn(fadeMedium);
		// 	console.log('ifTwo');
		// }

		// if (scrollPosition > ((scriptLines.length) * distance) && scrollPosition <= ((scriptLines.length +3) * distance)) {
		// 	$('.lines').fadeOut(fadeMedium);
		// 	$('.page2').fadeOut(fadeMedium);
		// 	console.log('ifThree');
		// }

		// if (scrollPosition <= ((scriptLines.length) * distance) &&  scrollPosition >= ((scriptLines.length - 2) * distance)) {
		// 	$('.lines').css("opacity", 1).fadeIn(fadeMedium);
		// 	console.log('ifFour');
		// }

		//  if (scrollPosition > ((scriptLines.length + 3) * distance)) {
		//  	$('.lines').css("opacity", 1).fadeIn(fadeMedium);
		//  	$('.page2').css("opacity", 1).fadeIn(fadeMedium);
		//  	$('.row0 .curvelines').css("opacity", 0).fadeOut(fadeMedium);
		//  	console.log('ifFive');
		// }
	});
});