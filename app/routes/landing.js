import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.store.findAll('event');
  },

  actions: {
    createTopic () {
      let controller = this.get('controller');

      let topic = this.store.createRecord('topic', {
        event: controller.get('nextEvent'),
        name: controller.get('topicName'),
        description: controller.get('topicDescription')
      });

      topic.save().then( () => {
        alert('saved');
      });
    },

    vote () {
      // make ajax call to ?

      // {
      //   valence: 0 // 0 or 1,
      //   topic: 1 // topic id
      // }
    }
  }
});
