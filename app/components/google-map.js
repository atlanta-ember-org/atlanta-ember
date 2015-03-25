import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['google-map'],

  initialize: function () {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644)
    };
    var map = new google.maps.Map(document.getElementById(this.get('elementId')), mapOptions);
    this.set('map', map);
  }.on('didInsertElement')

});
