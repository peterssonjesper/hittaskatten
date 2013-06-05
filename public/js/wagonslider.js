var app = app || {};

(function (app) {

	app.Slider = function ($el, callback) {

	  this.callback = callback;
	  var self = this;

    $el.slider({
      animate: 'fast',
      slide: function(e, ui) {
        imageUpdateDependingOnSlider(ui.value);
        self.callback(ui.value);
      }
    });

    this.value = function(value) {
      return $el.slider('value');
    };

    this.setValue = function(value) {
      $el.slider('value', value);
      imageUpdateDependingOnSlider(value);
    };

	};

	var updateZambiaAndIsland = function (schoolSrc, islandSrc) {
		$('#zambia').attr('src',schoolSrc);
		$('#cayman').attr('src',islandSrc);
	};

	var imageUpdateDependingOnSlider = function (sliderValue) {
		if (20 < sliderValue && sliderValue <= 25) {
			//disaster
			updateZambiaAndIsland('img/zambia-4.png', 'img/cayman-1.png');
		}

		if (25 < sliderValue && sliderValue <= 50) {
			//slum
			updateZambiaAndIsland('img/zambia-3.png', 'img/cayman-2.png');
		}

		if (50 < sliderValue && sliderValue <= 75) {
			//decent
			updateZambiaAndIsland('img/zambia-2.png', 'img/cayman-3.png');
		}

		if (75 < sliderValue && sliderValue <= 80) {
			//awsome
			updateZambiaAndIsland('img/zambia-1.png', 'img/cayman-4.png');
		}
	};

}(app))
