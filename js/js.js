function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(34.901091,-111.7443846)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/map-marker.svg";
  var myLatLng = new google.maps.LatLng(34.875,-111.765);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
