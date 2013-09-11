var $window = $(window);

$('html').removeClass('no-js').addClass('js');

$('.btn').on('click', function(e){
  e.preventDefault();
});

// The fun map stuff!
(function(){

  var benjamins_desk = new google.maps.LatLng(39.949943, -75.169102);

  var map_options = {
    center: benjamins_desk,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false
  };

  var map = new google.maps.Map( document.getElementById("map-canvas"), map_options );

  var marker = new google.maps.Marker({
    position: benjamins_desk,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });

  var info = new google.maps.InfoWindow({
    position: benjamins_desk,
    content: "<p><strong>We're Inside Benjamin's Desk</strong><br>1701 Walnut St<br> Philadelphia, PA 19103</p>",
  });

  google.maps.event.addListener( marker, 'click', function(){
    map.setZoom(19);
    map.setCenter( benjamins_desk );
    info.open( map, marker );
  });

  

  $window.on('resize orientationchange', function(){
    map.setCenter( benjamins_desk );
  });

})();


