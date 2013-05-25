var app = app || {};

(function(app) {

	app.Accelerometer = function() {

		var leftCallback, rightCallback, neutralCallback;
		var x = 0;
		var lastX = 0;
	
		this.init = function() {
			window.ondevicemotion = function(event) {  
				onMotion(event);
			}
		};

		this.onLeft = function(callback) {
			leftCallback = callback;
		};

		this.onRight = function(callback) {
			rightCallback = callback;
		};

		this.onNeutral = function(callback) {
			neutralCallback = callback;
		};

		var onMotion = function(event) {
			x = event.accelerationIncludingGravity.x;  
			y = event.accelerationIncludingGravity.y;  
			z = event.accelerationIncludingGravity.z;  

			if(typeof(leftCallback) === 'function' && analyzeShakeLeft(x, lastX)) {
				leftCallback();
			}
			if(typeof(rightCallback) === 'function' && analyzeShakeRight(x, lastX)) {
				rightCallback();
			}
			if(typeof(neutralCallback) === 'function' && analyzeShakeNeutral(x, lastX)) {
				neutralCallback();
			}
			lastX = x;
		};

		var analyzeShakeLeft = function(x, lastX) {
			return (x < lastX) && x < -5;
		};

		var analyzeShakeRight = function(x, lastX) {
			return (x > lastX) && x > 5;
		};

		var analyzeShakeNeutral = function(x, lastX) {
			return Math.abs(x) <= 2;
		};

	};

})(app);


