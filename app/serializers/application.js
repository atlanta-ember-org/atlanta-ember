import RESTSerializer from 'ember-data/serializers/rest';
import Ember from 'ember';

const { underscore } = Ember.String;

export default RESTSerializer.extend({
  keyForAttribute(attr) {
    return underscore(attr);
  }
});
