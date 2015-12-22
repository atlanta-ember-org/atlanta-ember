import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session')
});

// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

// export default Ember.Route.extend(AuthenticatedRouteMixin);
