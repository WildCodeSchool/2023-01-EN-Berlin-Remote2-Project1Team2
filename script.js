$(window).on( "scroll" , function() {

    var $document = $(document);
    var $window = $(this);

    if( $document.scrollTop() >= $document.height() - $window.height() - 400 ) {
        var throttled = _.throttle(updatePosition, 100);
        $(window).scroll(throttled);
    }

});