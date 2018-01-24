Feature: Logging
  As a non logged in user
  I want to be able to login with my email account

  Background:
    Given I am on the home page
    Then I clean the browser cookies

  Scenario: I cannot log in with an invalid account
    When I log in with an invalid account
    Then I am presented an error message
    And  I do not see my account


  Scenario: I can login and logout with valid account
    When I log in with a valid account
    Then I see my account
    And I see the logout button
    When I logout
    Then I do not see my account
