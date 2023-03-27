Feature: Data driven test

    E2E Ecommerce validation Description

    @Regression
    Scenario: Get data
        Given Get data from Cypress env
        Then Print data

    @Regression
    Scenario: Get runned data
        Given Get runned data
        Then Print gotten data