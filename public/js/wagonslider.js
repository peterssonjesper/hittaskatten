var app = app || {};

(function (app) {
	var width = 
	app.initializeSlider = function (points) {

		var windowWidth = window.innerWidth;
		var topImgWidth = 1312;
		var zoomRatio = windowWidth / topImgWidth;
		var scaledPoints = $.map(points, function (point) { return point * zoomRatio })
		if (zoomRatio > 1) {
			zoomRatio = 1;
		}


		$('#p_curve').pathslider({
			gripClass: 'wagon',
			rotateGrip: true,
			useCanvas: true,
			curve: { width: 4, color: "#333", cap: "round" },
			value: 50,
			points: scaledPoints,
			dataPoints: 200,
			tolerance: 3,
			range: 30
		});

		//set the zoom ration in percent, but make sure that it never is bigger than 100%
		

		/* Manipulating the wagon */
		var wagonOriginalHeight = 98;
		var wagonOriginalWidth = 102;
		var wagonPercentageSize = zoomRatio * 100;
		var $wagon = $('.wagon');
		$wagon.height(wagonOriginalHeight * zoomRatio);
		$wagon.width(wagonOriginalWidth * zoomRatio);
		$('.wagon').css('background-size', wagonPercentageSize + '%');

		/* Manipulating the railroad */
		$('#p_curve').css('background-size', wagonPercentageSize + '%');
		


	};

}(app))

