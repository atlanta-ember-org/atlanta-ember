import Ember from 'ember';
import DS from 'ember-data';

const { RESTSerializer, EmbeddedRecordsMixin } = DS;

export default RESTSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    venue: { embedded: 'always' }
  },

  /* jshint unused:false */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let rootedPayload = {};
    rootedPayload.events = payload;
    return this._super(store, primaryModelClass, rootedPayload, id, requestType);
  },

  keyForAttribute(attr, method) {
    return Ember.String.camelize(attr);
  }
});
