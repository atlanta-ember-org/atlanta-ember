import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    let self = this;
    return new Promise( function (resolve) {
      let nextEvent;
      self.store.findAll('event').then( function (events) {
        events.forEach( function (event) {
          if (self.isNextEvent(event, nextEvent)) {
            nextEvent = event;
          }
        });

        resolve(nextEvent);
      });
    });
  },

  isNextEvent: function (event, otherEvent) {
    let eventStartsAt = event.get('startsAt');
    let isInFuture = eventStartsAt > Date.now();

    let soonerThanOtherEvent;
    if (otherEvent) {
      soonerThanOtherEvent = eventStartsAt < otherEvent.get('startsAt');
    } else {
      soonerThanOtherEvent = true;
    }

    return isInFuture && soonerThanOtherEvent;
  }
});
