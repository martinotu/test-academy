var {Then} = require('cucumber');

  Then(/^I clean the browser cookies/, function () {
    browser.deleteCookie();
  });