import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', { "path": '/' });
  this.route('resources');
  this.route('login');
});

export default Router;
