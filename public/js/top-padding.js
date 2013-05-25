// ------------------------------------------------
// Function to add top padding on resize
// ------------------------------------------------

// Separate function object
var topPaddingFromLogoMethods = (function () {
    var selectors = {
        image: '.top-img'
    };
    function init ($element) {
        addPadding($element);
        $(window).resize(function() {
            addPadding($element);
        });
    }
    function addPadding($element){
        var imageHeight = $(selectors.image).height(),
        paddingTop = imageHeight / 1.5;
        $element.css('padding-top',paddingTop + 'px');
    }

    var base = {
        selectors : selectors,
        init: init,
        addPadding: addPadding
    };
    return base;
})();

// Jquery plugin
(function( $ ){
    $.fn.topPaddingFromLogo = function() {
        return this.each(function() {
            var base = topPaddingFromLogoMethods;
            var $self = $(this);
            // Add padding
            base.init($self);
        });
    };
})( jQuery );