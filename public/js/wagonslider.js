var app = app || {};

(function (app) {
	app.initializeSlider = function (points) {
		$('#p_curve').pathslider({
			gripClass: 'wagon',
			rotateGrip: true,
			useCanvas: true,
			curve: { width: 4, color: "#333", cap: "round" },
			value: 50,
			points: points,
			dataPoints: 200,
			tolerance: 3,
			range: 30
		});
	};

}(app))

