var MapWrapper = function(options){
  this.googleMap = new google.maps.Map(options.container, {
    center: options.center, 
    zoom: options.zoom}
  );
};

MapWrapper.prototype = {

  addMarker: function(color, coords){
    var pinColor = color;
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      icon: pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)
    })
  }, 

  addAllMarkers: function(countries){
    for (var country of countries){
      console.log('in for loop', country);
      var coords = {'lat': country.latlng[0], 'lng': country.latlng[1]};
      this.addMarker('ffffff', coords);
    }
  }
}

module.exports = MapWrapper;
