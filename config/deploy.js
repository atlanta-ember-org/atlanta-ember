/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pipeline: {
      activateOnDeploy: true
    },
    s3: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      filePattern: "*"
    },
    cloudfront: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET
    }
  };

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    ENV.s3.bucket = "atl-ember-staging";
    ENV.s3.region = "us-west-2";
    ENV.cloudfront.distribution = process.env.PRODUCTION_DISTRIBUTION;
  }

  // TODO: need to configure a production env that is not scoped to atl-ember-staging
  // if (deployTarget === 'production') {
  //   ENV.build.environment = 'production';
  //   ENV.s3.bucket = "atl-ember-staging";
  //   ENV.s3.region = "us-west-2";
  //   ENV.cloudfront.distribution = process.env.PRODUCTION_DISTRIBUTION;
  // }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
