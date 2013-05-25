$(document).ready(function () {

	var acc = new app.Accelerometer();
	var form = new app.Form();
	var numbers = new app.Numbers();

	numbers.init($(".numbers"));
	numbers.update(50.0);

	app.initializeSlider([25, 250, 450, 0, -455, 0, 630, 50]);
	acc.init();

	var wagon = $('#p_curve .wagon');
	var pathSlider = $('#p_curve').getpathslider();
	pathSlider.$el.on('change.pathslider', function() {
		var p = parseFloat(wagon.attr('data-percent'));
		numbers.update(p);
	});

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

	var form = new app.Form();
	form.init($("#submitform"),$("#submitform-thanks"));
	$("#submitform").submit(function() {
		form.close();
		return false;
	});

});
