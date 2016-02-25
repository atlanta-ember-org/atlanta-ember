import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.findAll('event');
  },

  actions: {
    createTopic (topic) {
      let controller =  this.get('controller');
      topic.save().then(function () {
        controller.replaceNewTopic();
      }, function () {});
    }
  }
});
