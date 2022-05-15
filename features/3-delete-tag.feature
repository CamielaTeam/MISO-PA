Feature: Delete tag

@user1 @web
Scenario: Delete a tag successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I save a screenshot with scenario "DeleteTag" and step "open-admin"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I save a screenshot with scenario "DeleteTag" and step "before-login"
  And I click on the login button
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteTag" and step "after-login"
  And I click on tags option
  And I wait for 2 seconds
  When I click on the new tags button
  And I save a screenshot with scenario "DeleteTag" and step "creating-tag"
  And I write "Tag para eliminar" in the tag name
  And I write "Descripción de tag" in the tag description
  And I save a screenshot with scenario "DeleteTag" and step "editing-tag"
  And I save the new tag
  And I save a screenshot with scenario "DeleteTag" and step "saving-tag"
  And I click on tags option
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteTag" and step "list-tags"
  And I click the last tag in the list
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteTag" and step "before-delete-tag"
  And I click the delete tag button
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteTag" and step "confirm-delete-tag"
  And I click confirm tag deleting
  And I wait for 2 seconds
  Then I see that there is no tag with the name "Tag para eliminar" in the tag list
  And I save a screenshot with scenario "DeleteTag" and step "checking-tag"