(function(app) {

	app.Numbers = function() {

		var total = 160;

		this.init = function($element) {
			this.$element = $element;
			this.$zambia = $element.find(".zambia");
			this.$cayman = $element.find(".cayman");
		};

		this.update = function(percentage) {
			this.$cayman.html(getCayman(percentage));
			this.$zambia.html(getZambia(percentage));
		};

		var getCayman = function(percentage) {
			return round(total * percentage / 100);
		};

		var getZambia = function(percentage) {
			return total - getCayman(percentage);
		};

		var round = function(n) {
			return Math.round(n);
		};

	};

})(app);
