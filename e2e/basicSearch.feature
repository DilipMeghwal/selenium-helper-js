Feature: Verify malakoff humanis

  # Scenario Outline: Verify the urls and desired screens are opened sucessfully
  #   Given user is on home page
  #   When user select who you are <YouAre>
  #   And user select for who <ForWho>
  #   And user select the solution <WhichSolution>
  #   And user click on search button on home page
  #   Then user click on button <buttonToBeClicked>
  #   And verify results

  #   Examples:
  #     | YouAre         | ForWho   | WhichSolution | buttonToBeClicked              |
  #     | Un particulier | Retraité | Santé         | Découvrir le détail de l'offre |
  #     | Un particulier | Retraité | Prévoyance    | Découvrir le détail de l'offre |
  #     | Un particulier | Actif    | Santé         | Découvrir le détail de l'offre |
  #     | Un particulier | Actif    | Prévoyance    | Découvrir le détail de l'offre |

  # Scenario Outline: Verify "Trouver une boutique à proximité" and the map opened
  #   Given user is on home page
  #   When user select who you are <YouAre>
  #   And user select for who <ForWho>
  #   And user select the solution <WhichSolution>
  #   And user click on search button on home page
  #   Then user click on button <buttonToBeClicked>
  #   And verify url contains <url> and <WhichSolution> switch is selected
  #   When user click on the email message icon "Nous contacter"
  #   Then verify the number <number> is the one displayed on the photo on the left
  #   Then click on "Trouver une boutique à proximité", I will check if I got the map

  #   Examples:
  #     | YouAre         | ForWho | WhichSolution | buttonToBeClicked              | url                                                  | number     |
  #     | Un particulier | Actif  | Santé         | Découvrir le détail de l'offre | https://www.malakoffhumanis.com/node/9599#Sant%C3%A9 | 0800002727 |


  # Scenario Outline: Verify "Envoyer un message" and message "Votre demande a été bien envoyée"
  #   Given user is on home page
  #   When user select who you are <YouAre>
  #   And user select for who <ForWho>
  #   And user select the solution <WhichSolution>
  #   And user click on search button on home page
  #   Then user click on button <buttonToBeClicked>
  #   And verify url contains <url> and <WhichSolution> switch is selected
  #   When user click on the email message icon "Nous contacter"
  #   And click on "Envoyer un message" button
  #   And enter membership number <membership_number>
  #   And select the checkbox "La synthèse de vos besoins"
  #   And enter request message "Offre santé individuelle"
  #   And enter name <name>
  #   And enter first name <firstname>
  #   And enter email <email>
  #   And enter confirm email <email>
  #   And enter telephone <telephone>
  #   And enter pincode <pincode>
  #   # And click on the button "Envoyer ma commande"
  #   # Then verify the message "Votre demande a bien été envoyée"

  #   Examples:
  #     | YouAre         | ForWho | WhichSolution | buttonToBeClicked              | url                                                  | membership_number | name   | firstname | email                            | telephone  | pincode |
  #     | Un particulier | Actif  | Santé         | Découvrir le détail de l'offre | https://www.malakoffhumanis.com/node/9599#Sant%C3%A9 | 12345             | MOUNIR | Ilyas     | ilyas.mounir@malakoffhumanis.com | 0101010101 | 94000   |

  @callback
  Scenario Outline: Verify "Etre rappelé par un conseiller" and the form
    Given user is on home page
    # When user select who you are <YouAre>
    # And user select for who <ForWho>
    # And user select the solution <WhichSolution>
    # And user click on search button on home page
    # Then user click on button <buttonToBeClicked>
    And verify url contains <url> and <WhichSolution> switch is selected
    When user click on the email message icon "Nous contacter"
    Then verify the number <number> is the one displayed on the photo on the left
    And user click on "Etre rappelé par un conseiller" and verify a form is opened
    When user choose <subject> from "Préciser l'objet de votre demande"
    And user click on "Immédiatement" switch
    # And user choose date as <date>
    # And user choose time as <time>
    And enter name <name>
    And enter firstname as <firstname> on call back screen
    And enter telephone <telephone>
    And click on the button "Envoyer ma commande" on call back screen
    Then verify the message "Votre demande a été envoyée"

    Examples:
      | YouAre         | ForWho | WhichSolution | buttonToBeClicked              | url                                                  | number     | subject | date            | time             | name   | firstname | telephone  |
      | Un particulier | Actif  | Santé         | Découvrir le détail de l'offre | https://www.malakoffhumanis.com/node/9599#Sant%C3%A9 | 0800002727 | Santé   | 22 October 2021 | Entre 11h et 12h | MOUNIR | "Ilyas"     | 0101010101 |

@chat
Scenario Outline: Verify "Discuter immédiatement avec un conseiller en ligne" and the chat
    Given user is on home page
    # When user select who you are <YouAre>
    # And user select for who <ForWho>
    # And user select the solution <WhichSolution>
    # And user click on search button on home page
    # Then user click on button <buttonToBeClicked>
    And verify url contains <url> and <WhichSolution> switch is selected
    When user click on the email message icon "Nous contacter"
    Then verify the number <number> is the one displayed on the photo on the left
    And user click on "Discuter immédiatement avec un conseiller en ligne" and verify a chat is opened
    And user send message "Hello" on chat

    Examples:
      | YouAre         | ForWho | WhichSolution | buttonToBeClicked              | url                                                  | number     | 
      | Un particulier | Actif  | Santé         | Découvrir le détail de l'offre | https://www.malakoffhumanis.com/node/9599#Sant%C3%A9 | 0800002727 | 
