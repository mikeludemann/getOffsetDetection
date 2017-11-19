var offsetDetection = (function(){

    var offsetOverview = {

            leftOffset: function(element){

            const offLeft = $(element).offset().left;

            return offLeft;

        },

            rightOffset: function(element){

            const offRight = $(window).width() - ($(element).offset().left + $(element).outerWidth());

            return offRight;

        },

            bottomOffset: function(element){

            const offBottom = $(window).height() - ($(element).offset().top + $(element).outerHeight());

            return offBottom;

        },

            topOffset: function(element){

            const offTop = $(element).offset().top;

            return offTop;

        },

            leftToRight: function(element){

            const ltr = $(element).offset().left + $(element).outerWidth();

            return ltr;

        },

            rigthToLeft: function(element){

            const rtl = $(element).outerWidth() - $(element).offset().left;

            return rtl;

        },

            topToBottom: function(element){

            const ttb = $(element).offset().top + $(element).outerHeight();

            return ttb;

        },

            bottomToTop: function(element){

            const btt = $(element).outerHeight() - $(element).offset().top;

            return btt;

        },

            leftToRightElement: function(element){

            const ltrE = $(element).width();

            return ltrE;

        },

            topToBottomElement: function(element){

            const ttbE = $(element).height();

            return ttbE;

        }

    }

    return {

    leftOffset: offsetOverview.leftOffset,
    rightOffset: offsetOverview.rightOffset,
    bottomOffset: offsetOverview.bottomOffset,
    topOffset: offsetOverview.topOffset,
    leftToRight: offsetOverview.leftToRight,
    rigthToLeft: offsetOverview.rigthToLeft,
    topToBottom: offsetOverview.topToBottom,
    bottomToTop: offsetOverview.bottomToTop,
    leftToRightElement: offsetOverview.leftToRightElement,
    topToBottomElement: offsetOverview.topToBottomElement

    };

})();