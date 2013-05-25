var app = app || {};

(function (app) {
	var width = 
	app.initializeSlider = function () {
		var desktopPoints = [50, 325, 375, 0, -480, -100, 875, 150];
		var mobilePoints = [25, 25, 50, 200, 0, -250, 450, 350];
		var windowWidth = window.innerWidth;


		var topImgWidth = 1312;
		var zoomRatio = windowWidth / topImgWidth;
		if (zoomRatio > 1) {
			zoomRatio = 1;
		}

		var mobileMode = windowWidth > 700;

		var points;
		if (mobileMode) {
			points = desktopPoints;
		}
		else {
			points = mobilePoints;
		}
		var scaledPoints = $.map(points, function (point) { return point * zoomRatio })
		var pathslider = $('#p_curve');
		pathslider.pathslider({
			gripClass: 'wagon',
			rotateGrip: mobileMode,
			useCanvas: true,
			curve: { width: 4, color: "#595959", cap: "round" },
			value: 50,
			points: scaledPoints,
			dataPoints: 200,
			tolerance: 3,
			range: 30
		});
		

		/* Manipulating the wagon */
		var wagonOriginalHeight = 98;
		var wagonOriginalWidth = 102;
		var backgroundRatioInProcent = zoomRatio * 100;
		var $wagon = $('.wagon');
		$('.wagon').css('background-size', backgroundRatioInProcent + '%');



		// test
		$('#p_curve').height(400*zoomRatio);

		// Add events
		pathslider.bind('create.pathslider update.pathslider start.pathslider slide.pathslider change.pathslider stop.pathslider', function (e, s) {
			imageUpdateDependingOnSlider(s.percent);
		});
	};

	var updateZambiaAndIsland = function (schoolSrc, islandSrc) {
		console.log('change img to ' + schoolSrc + ' and ' + islandSrc);
		$('#zambia').attr('src',schoolSrc);
		$('#cayman').attr('src',islandSrc);
	}


	var imageUpdateDependingOnSlider = function (sliderValue) {
		if (20 < sliderValue && sliderValue <= 25) {
			//disaster
			updateZambiaAndIsland('img/zambia-4.png', 'img/cayman-1.png');
		}

		if (25 < sliderValue && sliderValue <= 50) {
			//slum
			updateZambiaAndIsland('img/zambia-3.png', 'img/cayman-2.png');
		}

		if (50 < sliderValue && sliderValue <= 75) {
			//decent
			updateZambiaAndIsland('img/zambia-2.png', 'img/cayman-3.png');
		}

		if (75 < sliderValue && sliderValue <= 80) {
			//awsome
			updateZambiaAndIsland('img/zambia-1.png', 'img/cayman-4.png');
		}
	}

}(app))

