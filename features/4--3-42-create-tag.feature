Feature: Create tag

@user1 @web
Scenario: Create a tag successfully
  Given I navigate to page "http://localhost:2369/ghost/"
  And I save a screenshot with scenario "NewCreateTag" and step "open-admin"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I save a screenshot with scenario "NewCreateTag" and step "before-login"
  And I click on the login button
  And I wait for 2 seconds
  And I save a screenshot with scenario "NewCreateTag" and step "after-login"
  And I click on tags option
  And I wait for 2 seconds
  When I click on the new tags button
  And I save a screenshot with scenario "NewCreateTag" and step "creating-tag"
  And I write "Nuevo tag" in the tag name
  And I write "Descripción de tag" in the tag description
  And I save a screenshot with scenario "NewCreateTag" and step "editing-tag"
  And I save the new tag in v3.42
  And I save a screenshot with scenario "NewCreateTag" and step "saving-tag"
  And I click on tags option
  And I wait for 2 seconds
  Then I see that there is a tag in the list with name "Nuevo tag"
  And I save a screenshot with scenario "NewCreateTag" and step "checking-tag"
