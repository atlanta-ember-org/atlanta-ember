/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'atlantaember',
    environment: environment,
    baseURL: 'atl-ember-staging/',
    locationType: 'hash',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com *.gstatic.com *maps.google.com/maps-api-v3/api/*",
      'font-src': "'self' *.gstatic.com ",
      'connect-src': "'self' https://atlanta-ember-backend-app.herokuapp.com http://localhost:3000",
      'img-src': "'self' data: *.googleapis.com *.gstatic.com 'http://photos2.meetupstatic.com/photos' http://photos2.meetupstatic.com",
      'style-src': "'self' 'unsafe-inline' *.googleapis.com",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    }
    ENV.baseURL = '/';
    ENV.domain = '';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.domain = 'https://atlanta-ember-backend-app.herokuapp.com';
  }

  return ENV;
};
