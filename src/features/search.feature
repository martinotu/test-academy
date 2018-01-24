Feature: Search for items
As a guest user 
I want to be able to sear for and item 

  Background:
    Given I am on the home page

  Scenario Outline: I can search for items
    When I search for <key>
    Then I can see <key> related results

    Examples:
      | key          |
      | dress        |
      | summer dress |
      | faded short  |


  Scenario: I search for an item that doesn't exist
    When I search for 0987654321poiuytrewqñlkjhgfdsa
    Then I see there are no results