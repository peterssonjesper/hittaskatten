$(document).ready(function () {

	var acc = new app.Accelerometer();
	var form = new app.Form();
	var numbers = new app.Numbers();
	var arrows = new app.Arrows();
	var signature = new app.Signature();

	arrows.init($(".left-arrow"), $(".right-arrow"));

	numbers.init($(".numbers"));
	numbers.update(50.0);

	var slider = new app.Slider($(".slider"), function(value) {
		numbers.update(value);
	});
	acc.init();

	var onLeft = function() {
	  var value = slider.value();
		value = Math.max(value-15, 0);
		slider.setValue(value);
		numbers.update(value);
	};

	var onRight = function() {
    var value = slider.value();
		value = Math.min(value+15, 100);
		slider.setValue(value);
		numbers.update(value);
	};

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

	if (window.DeviceOrientationEvent || window.OrientationEvent) {
		$('html').addClass('hastilt');
	}


});
