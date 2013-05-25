(function(app, $) {

	app.Form = function() {


		this.init = function($formElement) {
			this.$formElement = $formElement;
		};

		this.close = function() {
			this.$formElement.animate({
				'height' : 1
			}, 500, function() {
				$(this).animate({
					'top' : 40
				});
				$("#thanks").fadeIn('slow');
			});
		};

	};

})(app, jQuery);
