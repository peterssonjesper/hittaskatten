(function(app, $) {

	app.Form = function() {

		this.init = function($formElement, $thanksElement) {
			this.$formElement = $formElement;
			this.$thanksElement = $thanksElement;
		};

		this.close = function() {
			this.$formElement.animate({
				'height' : 1
			}, 500, function() {
				$(this).css('border-top', '1px solid #ccc');
				$(this).animate({
					'top' : 40
				}, function() {
					$(this).animate({
						'width' : 0
					}, function() {
						setTimeout(function() {
							$('#submitform-share').animate({
								'height' : 80
							}, 'slow');
						}, 200);
					});
				});
				$('#submitform-thanks').animate({
					'height' : 40
				}, 'slow');
			});
		};

	};

})(app, jQuery);
