Feature: Delete tag

@user1 @web
Scenario: Delete a tag successfully
  Given I navigate to page "http://localhost:2369/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on tags option
  And I wait for 2 seconds
  When I click on the new tags button
  And I write "Tag para eliminar" in the tag name
  And I write "Descripción de tag" in the tag description
  And I save the new tag in v3.42
  And I click on tags option
  And I wait for 2 seconds
  And I click the last tag in the list
  And I wait for 2 seconds
  And I click the delete tag button
  And I wait for 2 seconds
  And I click confirm tag deleting
  And I wait for 2 seconds
  Then I see that there is no tag with the name "Tag para eliminar" in the tag list