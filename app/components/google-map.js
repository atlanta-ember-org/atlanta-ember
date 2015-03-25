import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['google-map'],
  hugeLat: 33.792418, // should really get passed in
  hugeLng: -84.385605, // should really get passed in

  staticOptions: {
    zoom: 8,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false
  },

  latLng: function () {
    return new google.maps.LatLng(this.get('hugeLat'), this.get('hugeLng'));
  }.property(),

  mapOptions: function () {
    var options = this.get('staticOptions');
    options.center = this.get('latLng');
    return options;
  }.property(),

  map: function () {
    var element = document.getElementById(this.get('elementId'));
    return new google.maps.Map(element, this.get('mapOptions'));
  }.property(),

  initialize: function () {
    this.set('map', this.get('map'));
    this.addMarker();
  }.on('didInsertElement'),

  addMarker: function () {
    var _this = this;
    var map = this.get('map');
    var marker = new google.maps.Marker({
        position: this.get('latLng'),
        animation: google.maps.Animation.DROP,
        map: map,
        title: 'Huge'
    });
  }



});
