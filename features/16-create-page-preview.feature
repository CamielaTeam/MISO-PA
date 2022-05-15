Feature: Create page preview

@user1 @web
Scenario: Create a page and see its preview successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I write "Nueva pagina a previsualizar" in the page title
  And I click on preview
  And I wait for 2 seconds
  Then I should see a preview of the page
