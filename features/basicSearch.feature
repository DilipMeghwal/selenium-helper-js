Feature: Verify malakoff humanis

  Scenario Outline: Verify the urls and desired screens are opened sucessfully
    Given user is on home page
    When user select who you are <YouAre>
    And user select for who <ForWho>
    And user select the solution <WhichSolution>
    And user click on search button
    Then user click on button <buttonToBeClicked>
    And verify results

    Examples:
      | YouAre         | ForWho   | WhichSolution | buttonToBeClicked              |
      | Un particulier | Retraité | Santé         | Découvrir le détail de l'offre |
      | Un particulier | Retraité | Prévoyance    | Découvrir le détail de l'offre |
      | Un particulier | Actif    | Santé         | Découvrir le détail de l'offre |
      | Un particulier | Actif    | Prévoyance    | Découvrir le détail de l'offre |

