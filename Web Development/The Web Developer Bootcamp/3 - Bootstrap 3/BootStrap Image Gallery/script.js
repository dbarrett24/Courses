$(window).on('load', function(){
    $('.masonry-container').masonry({
        itemSelector: '.masonry-item',
        // columnWidth: '.grid-sizer',
        percentPosition: true
      });
})