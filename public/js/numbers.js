(function(app) {

	app.Numbers = function() {

		var total = 90;
		var numberOfChildrenThatCorrespondsToOneMillionSek = 533;
		var numberOfSafesThatCorrespondsToOneMillionSek = 0.9;

		this.init = function($element) {
			this.$zambia = $element.find(".zambia");
			this.$cayman = $element.find(".cayman");
			this.$children = $element.find(".number-of-children");
			this.$safes = $element.find(".number-of-safes");
		};

		this.update = function(percentage) {
			this.$cayman.html(getCayman(percentage));
			this.$zambia.html(getZambia(percentage));
			this.$children.html(getChildren(percentage));
			this.$safes.html(getSafes(percentage));
		};

		var getCayman = function(percentage) {
			return round(total * percentage / 100);
		};

		var getZambia = function(percentage) {
			return total - getCayman(percentage);
		};

		var getSafes = function(percentage) {
			return round(total * numberOfSafesThatCorrespondsToOneMillionSek * percentage / 100);
		};

		var getChildren = function(percentage) {
			return round(total * numberOfChildrenThatCorrespondsToOneMillionSek * (100 - percentage) / 100);
		};

		var round = function(n) {
			return Math.round(n);
		};

	};

})(app);
