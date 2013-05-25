$(document).ready(function () {

	var acc = new app.Accelerometer();
	var form = new app.Form();
	var numbers = new app.Numbers();
	var arrows = new app.Arrows();
	var signature = new app.Signature();

	arrows.init($(".left-arrow"), $(".right-arrow"));

	numbers.init($(".numbers"));
	numbers.update(50.0);

	app.initializeSlider();
	acc.init();

	var wagon = $('#p_curve .wagon');
	var pathSlider = $('#p_curve').getpathslider();
	pathSlider.$el.on('change.pathslider', function() {
		var p = parseFloat(wagon.attr('data-percent'));
		numbers.update(p);
	});

	var onLeft = function() {
		var p = wagon.data('percent');
		p = Math.max(p-2, 0);
		wagon.data('percent', p);
		pathSlider.setSlider(p);
	};

	var onRight = function() {
		var p = wagon.data('percent');
		p = Math.min(p+2, 100);
		wagon.data('percent', p);
		pathSlider.setSlider(p);
	};

	acc.onLeft(onLeft);
	acc.onRight(onRight);

	arrows.onLeft(onLeft);
	arrows.onRight(onRight);


  signature.init(".signature", ".submitform-field");

	var form = new app.Form();
	form.init($("#submitform"),$("#submitform-thanks"));
	$("#submitform").submit(function() {
		form.close();
		return false;
	});

	$('.outer').topPaddingFromLogo();


});
