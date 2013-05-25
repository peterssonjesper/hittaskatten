(function(app, $) {

	app.Form = function() {


		this.init = function($formElement,$thanksElement) {
			this.$formElement = $formElement;
			this.$thanksElement = $thanksElement;
		};

		this.close = function() {
			this.$formElement.animate({
				'height' : 1
			}, 500, function() {
				$(this).animate({
					'top' : 40
				});
				$('#submitform-thanks').fadeIn('slow');
			});
		};

	};

})(app, jQuery);
