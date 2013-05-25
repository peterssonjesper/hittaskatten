(function(app) {

	app.Arrows = function() {

		var leftCallback, rightCallback;

		this.init = function($left, $right) {
			this.$left = $left;
			this.$right = $right;
			this.$left.on('click', function() {
				triggerLeft();
			});

			this.$right.on('click', function() {
				triggerRight();
			});

			window.document.onkeydown = function(e) {
				if(e.keyCode === 37) {
					triggerLeft();
				}
				else if(e.keyCode === 39) {
					triggerRight();
				}
			};

		};

		this.onLeft = function(callback) {
			leftCallback = callback;
		};

		this.onRight = function(callback) {
			rightCallback = callback;
		};

		var triggerLeft = function() {
			if(typeof(leftCallback) === 'function') {
				leftCallback();
			}
		};

		var triggerRight = function() {
			if(typeof(rightCallback) === 'function') {
				rightCallback();
			}
		};

	};

})(app);
