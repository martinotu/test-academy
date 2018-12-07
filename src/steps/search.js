var {Then, Given} = require('cucumber');
import homePage from '../model/HomePage';

    Given(/^I search for (.*)/, function (q) {
        //example that uses the model definition directly
        homePage.searchFld.waitForVisible();
        homePage.searchFld.setValue(q);
        browser.keys("Enter");
    });
    
    Then(/^I can see (.*) related results/, function (q) {
        homePage.itemsList.waitForVisible();
        expect(homePage.itemsList.value.length > 0, 'Results list is empty').to.be.true;
        
        //get first element
        let ement = homePage.itemsList.value[0];
        let itemText = browser.elementIdText(ement.ELEMENT).value;
        expect(itemText.toLowerCase()).to.have.string(q.toLowerCase());
        expect(homePage.searchFld.getValue()).to.contain(q);
    });
    
    Then(/^I see there are no results/, function() {
        expect(homePage.noResults.waitForVisible()).to.be.true;
    });
