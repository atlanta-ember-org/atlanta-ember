import Ember from 'ember';

const { Component, observer, on, run: { schedule } } = Ember;

// must give some dimentions to the dom element
// .googl-map {
//   width: 100px;
//   height: 100px;
// }

// location should respond to lat, lon, and name
// {{google-map location=content.venue}}

export default Component.extend({
  classNames: ['google-map'],

  // if the location isn't provided then use this as a fallback
  defaultLocation: {
    lat: 33.7590866,
    lon: -84.3339374
  },

  staticOptions: {
    zoom: 13,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false
  },

  onDidInitAttrs: on('didInitAttrs', function() {
    if (!this.get('location')) {
      this.set('location', this.get('defaultLocation'));
    }
  }),

  onDidInsertElement: on('didInsertElement', function () {
    schedule('afterRender', () => {
      this.drawMap();
    });
  }),

  initializeMap: function (latLng) {
    var element = document.getElementById(this.get('elementId'));
    var options = this.get('staticOptions');
    options.center = latLng;
    return new google.maps.Map(element, options);
  },

  drawMap: observer('location.lat', 'location.lon', function() {
    var latLng = new google.maps.LatLng(this.get('location.lat'), this.get('location.lon'));
    var map = this.initializeMap(latLng);
    this.addMarker(map, latLng);
  }),

  addMarker: function (map, latLng) {
    var name = this.get('location.name');
    new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        map: map,
        title: name,
        icon: '/assets/images/ember-pointer-small.png'
    });
  }
});
