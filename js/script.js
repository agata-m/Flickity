// JS carousel

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    contain: true,
    wrapAround: true,
    hash: true
});


// JS restart button

var restart = document.querySelector('#restart');

restart.addEventListener( 'click', function( event ) {
    flkty.select( 0 );
});
  

// jQuery scroll bar

var $carousel = $('.main-carousel').flickity();

var $progressBar = $('.progress-bar');

$carousel.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});