import cucumber from 'cucumber';
import homePage from '../model/HomePage';
import womanPage from '../model/WomanPage'
import dressesPage from '../model/DressesPage'
import tshirtsPage from '../model/TshirtsPage'

cucumber.defineSupportCode(function ({ Given, Then }) {
  Given(/^I am on the home page/, function () {
    homePage.open();
  });
  
  Given(/^I click on women menu/, function () {
    homePage.goToWoman();
  });
  
  Then(/^I see that women page is loaded/, function() {
    expect(womanPage.isLoaded());

  });
  
  Given(/^I click on dresses menu/, function () {	
	  homePage.goToDresses();
  });
  
  Then(/^I see that dresses page is loaded/, function() {
	  expect(dressesPage.isLoaded());
  });
  
  Given(/^I click on t-shirts menu/, function () {
	  homePage.goToTshirts();
  });
  
  Then(/^I see that t-shirts page is loaded/, function() {
	  expect(tshirtsPage.isLoaded());
  });
  
});
