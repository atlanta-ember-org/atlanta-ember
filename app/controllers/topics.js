import Ember from 'ember';

export default Ember.Controller.extend({

  newTopic: Ember.computed(function () {
    return this.store.createRecord('topic');
  }),

  replaceNewTopic () {
    this.set('newTopic', this.store.createRecord('topic'));
  }
});
