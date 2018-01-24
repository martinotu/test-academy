import cucumber from 'cucumber';
import homePage from '../model/HomePage';
import loginPage from '../model/LoginPage';

cucumber.defineSupportCode(function ({ Given, Then, When }) {
  Given(/^I log in with a valid account/, function () {
    loginPage.open(); //is loginPage has this.path set then you can open it directly(uses the URL)
    loginPage.loginAs("turturiellomartino@gmail.com", "password");
  });

  Given(/^I log in with email (.*) (.*)/, function (email, password) {
    loginPage.open();
    loginPage.loginAs(email, password);
  });

  Given(/^I log in with an invalid account/, function () {
    homePage.goToLogin();
    loginPage.isLoaded();
    loginPage.loginAs("turturiellomartino@gmail.com", "wrong");
  });

  Then(/^I am presented an error message/, function () {
    loginPage.errorDiv.waitForVisible();
    expect(loginPage.errorDiv.getText()).to.contain('Authentication failed.');
  });

  Then(/^I see the logout button/, function () {
    expect(homePage.signOutLnk.isVisible());
  });

  When(/^I logout/, function () {
    homePage.logout();
  });

  Then(/^I see my account/, function () {
    expect(homePage.isAuthenticated()).to.be.true;
  });

  Then(/^I do not see my account/, function () {
    expect(homePage.isAuthenticated()).to.be.false;
  });


});

