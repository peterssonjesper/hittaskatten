var app = app || {};

(function (app) {
	app.initializeSlider = function () {
		$('#p_curve').pathslider({
			gripClass: 'wagon',
			rotateGrip: true,
			useCanvas: false,
			curve: { width: 4, color: "#333", cap: "round" },
			value: 50,
			points: [25, 250, 150, 25, -125, 25, 275, 25],
			dataPoints: 200,
			tolerance: 3,
			range: 30
		});
	};

}(app))

