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
    ENV.build.environment = 'staging';
    ENV.s3.bucket = process.env.S3_BUCKET;
    ENV.s3.region = process.env.S3_REGION;
    ENV.cloudfront.distribution = process.env.CF_DISTRIBUTION;
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.bucket = process.env.S3_BUCKET;
    ENV.s3.region = process.env.S3_REGION;
    ENV.cloudfront.distribution = process.env.CF_DISTRIBUTION;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
