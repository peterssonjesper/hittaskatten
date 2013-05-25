$(document).ready(function () {

	app.initializeSlider([25, 250, 150, 25, -125, 25, 275, 25]);
	var acc = new app.Accelerometer();
	acc.init();

	var wagon = $('#p_curve .wagon');
	var pathSlider = $('#p_curve').getpathslider();

	acc.onLeft(function() {
		var p = wagon.data('percent');
		p = Math.max(p-2, -100);
		wagon.data('percent', p);
		pathSlider.setSlider(p);
	});

	acc.onRight(function() {
		var p = wagon.data('percent');
		p = Math.min(p+2, 100);
		wagon.data('percent', p);
		pathSlider.setSlider(p);
	});

});
