const merge = require('merge');
const stagingConfig = require('./master.conf.js');

localConfig = merge(stagingConfig.config, {
  maxInstances: 2,
  host: 'MacBookMt.local',

  capabilities: [
    {
        browserName: 'chrome',
        //browserVersion: '60',
        platform: 'ANY',
        resolution: '1280x1024',
    },

    {
      browserName: 'firefox',
      platform: 'ANY',
      resolution: '1280x1024'
  }
  ],
});

exports.config = localConfig;

