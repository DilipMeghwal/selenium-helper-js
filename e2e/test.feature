Feature: To validate the existing user account related features

    @test
    Scenario Outline: Validate user is able to login in with given credentials
        Given user is on parabank home page
        When user enter username as <username>
        # And user enter password as <password>
        # And user click on log in
        # Then verify user is able to login in successfully

        Examples:
            | username | password |
            | "demo"   | "demo"   |
            # | "test"   | "demo"   |