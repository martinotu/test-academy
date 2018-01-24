module.exports = function () {

  browser.addCommand('waitForClickable', function (ms = null) {
    return browser.waitForVisible(this.element().selector,ms) && browser.waitForEnabled(this.element().selector,ms);
  });

  browser.addCommand('waitForNotVisible', function (ms = null) {
    return this.waitForVisible(ms, true);
  });

  browser.addCommand('waitForNotSelected', function (ms = null) {
    return this.waitForSelected(ms, true);
  });

  browser.addCommand('waitForNotExist', function (ms = null) {
      return this.waitForExist(ms, true);
  });
  
  browser.addCommand('getRandomInt', function (min , max) { 
      return Math.floor(Math.random() * (max - min + 1)) + min;
  });
  
};

