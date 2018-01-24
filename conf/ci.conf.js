const merge = require('merge');
const stagingConfig = require('./master.conf.js');

localConfig = merge(stagingConfig.config, {
  maxInstances: 3,
  host: 'MacBookMt.local',

  capabilities: [
    {
      browserName: 'firefox',
      platform: 'ANY',
      resolution: '1280x1024'
  }
  ],
});

exports.config = localConfig;

