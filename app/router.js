import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', { "path": '/' });
  this.route('tom-yehuda-chat'); // temporary landing page
});

export default Router;
