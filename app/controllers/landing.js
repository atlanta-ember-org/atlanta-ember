import Ember from 'ember';

export default Ember.Controller.extend({

  upcomingEvents: Ember.computed.filter('model', function(record) { // filter by upcoming events
    return moment(record.get('startsAt')).isAfter(moment().format());
  }),

  sortedEvents: Ember.computed.sort('upcomingEvents', (a, b) => { // sort events by startsAt
    return a.get('startsAt') - b.get('startsAt');
  }),

  nextEvent: Ember.computed('sortedEvents', function() { // get next event
    return this.get('sortedEvents.firstObject');
  }),

  topicName: null,
  topicDescription: null,

});
