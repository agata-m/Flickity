// MUSTACHE TEMPLATE

(function() {

  var templateSlide = document.getElementById('newSlide').innerHTML;
  Mustache.parse(templateSlide);

  var slides = '';

  for( var i = 0; i < newCarousel.length; i++ ) {
    console.log(newCarousel);
    slides += Mustache.render(templateSlide, newCarousel[i]);
  }

  var printOut = document.getElementById('printOut');

  printOut.insertAdjacentHTML('beforeend', slides);

})();


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

// GOOGLE MAPS

function initMap() {

	var china = newCarousel[0].coords;
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: china});
    
	for (var i = 0; i < newCarousel.length; i++ ) {
		  
      	if( key = 'coords') {
        	var location = newCarousel[i].coords;
			var newMarker = new google.maps.Marker({position: location, map: map, index: i});

			newMarker.addListener( 'click', function() {
				flkty.select( this.index );
			});
		}
	
		flkty.on( 'change', function(i) {
			var changeLocation = newCarousel[i].coords;
			map.panTo(changeLocation);
		});
		
	}

};  