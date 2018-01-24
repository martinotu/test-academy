import cucumber from 'cucumber';

cucumber.defineSupportCode(function ({ Then }) {
  Then(/^I clean the browser cookies/, function () {
    browser.deleteCookie();
  });
});

