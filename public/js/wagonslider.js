var app = app || {};

(function (app) {
	var width = 
	app.initializeSlider = function (points) {

		var windowWidth = window.innerWidth;
		var topImgWidth = 1312;
		var zoomRatio = windowWidth / topImgWidth;
		if (zoomRatio > 1) {
			zoomRatio = 1;
		}

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

	};

}(app))

