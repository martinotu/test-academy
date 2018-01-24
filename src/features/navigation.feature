Feature: Main navigation
As a guest user
I want to be able to navigate to the main site pages

        Background:
                Given I am on the home page

        Scenario: I can navigate to women page
                Given I click on women menu
                Then I see that women page is loaded

        Scenario: I can navigate to women page
                Given I click on dresses menu
                Then I see that dresses page is loaded

        Scenario: I can navigate to women page
                Given I click on t-shirts menu
                Then I see that t-shirts page is loaded