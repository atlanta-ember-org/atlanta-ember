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

  ENV.build.environment = deployTarget;
  ENV.s3.bucket = process.env.S3_BUCKET;
  ENV.s3.region = process.env.S3_REGION;
  ENV.cloudfront.distribution = process.env.CF_DISTRIBUTION;

  return ENV;
};
