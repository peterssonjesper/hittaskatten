var app = app || {};

(function (app) {
	var width = 
	app.initializeSlider = function (points) {

		var windowWidth = window.innerWidth;
		var topImgWidth = 1312;
		var zoomRatio = windowWidth / topImgWidth;
		var scaledPoints = $.map(points, function (point) { return point * zoomRatio })


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
		var wagonPercentageSize = zoomRatio * 100;
		if (wagonPercentageSize > 100) {
			wagonPercentageSize = 100;
		}

		
		$('.wagon').css('background-size', wagonPercentageSize+'%');
		$('#p_curve').css('background-size', wagonPercentageSize + '%');

	};

}(app))

