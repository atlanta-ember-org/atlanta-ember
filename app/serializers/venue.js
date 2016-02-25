import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  /* jshint unused:false */
  keyForAttribute(attr, method) {
    return Ember.String.camelize(attr);
  }
});
