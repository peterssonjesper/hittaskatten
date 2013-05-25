var app = app || {};

(function (app) {
	var width = 
	app.initializeSlider = function () {
		var desktopPoints = [25, 250, 450, 0, -455, 0, 700, 50];
		var mobilePoints = [25, 350, 25, -175, 50, 175, 425, 50];
		var windowWidth = window.innerWidth;


		var topImgWidth = 1312;
		var zoomRatio = windowWidth / topImgWidth;
		if (zoomRatio > 1) {
			zoomRatio = 1;
		}

		var points;
		if (windowWidth > 700) {
			points = desktopPoints;
		}
		else {
			points = mobilePoints;
		}
		var scaledPoints = $.map(points, function (point) { return point * zoomRatio })
		var pathslider = $('#p_curve');
		pathslider.pathslider({
			gripClass: 'wagon',
			rotateGrip: true,
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

		/* Manipulating the railroad */
		var railroadHeight = 252;
		var railroadWidth = 629;

		
		var $railroad = $('#railroad');
		$railroad.height(railroadHeight * zoomRatio);
		$railroad.width(railroadWidth * zoomRatio);

		// Add events
		pathslider.bind('create.pathslider update.pathslider start.pathslider slide.pathslider change.pathslider stop.pathslider', function (e, s) {
			imageUpdateDependingOnSlider(s.percent);
		});
	};

	var updateZambiaAndIsland = function (schoolSrc, islandSrc) {
		console.log('change img to ' + schoolSrc + ' and ' + islandSrc);
		$('#zambia').attr('src',schoolSrc);
		//$('#island').src(islandSrc);
	}


	var imageUpdateDependingOnSlider = function (sliderValue) {
		if (20 < sliderValue && sliderValue <= 25) {
			//disaster
			updateZambiaAndIsland('img/zambia-1.png', 'img/island-4.png');
		}

		if (25 < sliderValue && sliderValue <= 50) {
			//slum
			updateZambiaAndIsland('img/zambia-2.png', 'img/island-3.png');
		}

		if (50 < sliderValue && sliderValue <= 75) {
			//decent
			updateZambiaAndIsland('img/zambia-3.png', 'img/island-2.png');
		}

		if (75 < sliderValue && sliderValue <= 80) {
			//awsome
			updateZambiaAndIsland('img/zambia-4.png', 'img/island-1.png');
		}


	}

}(app))

