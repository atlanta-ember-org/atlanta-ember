import RESTAdapter from 'ember-data/adapters/rest';
import config from '../config/environment';

export default RESTAdapter.extend({
  host: config.domain
});
