const merge = require('lodash.merge');
const devConfig = require('./dev');
const prodConfig = require('./prod');

// base config that is shared across all environments
const baseConfig = {
  port: 4000
};

// create an empty object that we will merge base config and env specific config
let envConfig = {};

const env = process.env.NODE_ENV;

switch (env) {
  case 'development':
  case 'dev':
    envConfig = merge(baseConfig, devConfig);
    break;
  case 'prod':
  case 'production':
    envConfig = merge(baseConfig, prodConfig);
    break;
  default:
    envConfig = merge(baseConfig, devConfig);
}

module.exports = envConfig;
