Feature: Edit tag

@user1 @web
Scenario: Edit a tag successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on tags option
  And I wait for 2 seconds
  And I click on the new tags button
  And I write "Nuevo tag" in the tag name
  And I write "Descripción de tag" in the tag description
  And I save the new tag
  And I wait for 2 seconds
  And I click on tags option
  And I wait for 2 seconds
  When I click the last tag in the list
  And I wait for 2 seconds
  And I write "Tag editado" in the tag name
  And I write "Descripción editada de tag" in the tag description
  And I save the new tag
  And I wait for 2 seconds
  And I click on tags option
  And I wait for 2 seconds
  Then I see that there is a tag in the list with name "Tag editado"
