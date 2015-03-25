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

  mapOptions: function () {
    var options = this.get('staticOptions');
    options.center = new google.maps.LatLng(this.get('hugeLat'), this.get('hugeLng'));
    return options;
  }.property(),

  map: function () {
    var element = document.getElementById(this.get('elementId'));
    return new google.maps.Map(element, this.get('mapOptions'));
  }.property(),

  initialize: function () {
    this.set('map', this.get('map'));
  }.on('didInsertElement')

});
