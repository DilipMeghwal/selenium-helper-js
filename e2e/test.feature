Feature: test the feature

    @test
    Scenario Outline: Scenario name
        Given user is on parabank home page
        When user enter username as <username>
        And user enter password as <password>
        And user click on log in
        Then verify user is able to login in successfully

        Examples:
            | username | password |
            | "demo"   | "demo"   |