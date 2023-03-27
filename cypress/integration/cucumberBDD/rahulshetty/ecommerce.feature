Feature: E2E Ecommerce validation

    E2E Ecommerce validation Description

    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add item to Cart
        And Validate the total prices
        Then Select the country submit and verify Thank you message
        
    @Smoke  
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
            |name |gender |
            |bobz |Male   |
        Then Validate the forms behaviour
        And Select the Shop page