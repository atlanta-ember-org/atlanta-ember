import Ember from 'ember';
/* global L */

const { computed, Controller } = Ember;
const { filter, sort } = computed;

export default Controller.extend({
  defaultZoom: 14,
  icon: L.icon({
    iconUrl: '/assets/images/ember-pointer-small.png',
    iconSize: [100, 100]
  }),

  upcomingEvents: filter('model', function(record) { // filter by upcoming events
    return moment(record.get('startsAt')).isAfter(moment().format());
  }),

  sortedEvents: sort('upcomingEvents', (a, b) => { // sort events by startsAt
    return a.get('startsAt') - b.get('startsAt');
  }),

  nextEvent: computed('sortedEvents', function() { // get next event
    return this.get('sortedEvents.firstObject');
  }),

  topicName: null,
  topicDescription: null,

});
