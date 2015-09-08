import Ember from 'ember';

// must give some dimentions to the dom element
// .googl-map {
//   width: 100px;
//   height: 100px;
// }

// location should respond to lat, lon, and name
// {{google-map location=content.venue}}

export default Ember.Component.extend({
  classNames: ['google-map'],

  staticOptions: {
    zoom: 13,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false
  },

  initialize: function () {
    this.drawMap();
  }.on('didInsertElement'),

  initializeMap: function (latLng) {
    var element = document.getElementById(this.get('elementId'));
    var options = this.get('staticOptions');
    options.center = latLng;
    return new google.maps.Map(element, options);
  },

  drawMap: function () {
    var latLng = new google.maps.LatLng(this.get('location.lat'), this.get('location.lon'));
    var map = this.initializeMap(latLng);
    this.addMarker(map, latLng);
  }.observes('location.lat', 'location.lon'),

  addMarker: function (map, latLng) {
    var _this = this;
    var name = this.get('location.name');
    var marker = new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        map: map,
        title: name,
        icon: '/assets/images/ember-pointer-small.png'
    });
  }
});
