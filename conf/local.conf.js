const merge = require('merge');
const stagingConfig = require('./master.conf.js');

localConfig = merge(stagingConfig.config, {
  maxInstances: 1,
  services: ['selenium-standalone']
});

exports.config = localConfig;
