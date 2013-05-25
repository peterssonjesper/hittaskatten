$(document).ready(function () {

	var acc = new app.Accelerometer();
	acc.init();

	acc.onLeft(function () {
		// Move slider left
	});

	acc.onRight(function () {
		// Move slider right
	});

	acc.onNeutral(function () {
		// Do nothing
	});



	//slider
	app.initializeSlider();
});
