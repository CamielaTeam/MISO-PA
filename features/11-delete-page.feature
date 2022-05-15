Feature: Delete a page

@user1 @web
Scenario: Delete a page succesfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I wait for 2 seconds
  And I write "Pagina para eliminar" in the page title
  And I click on publish page dropdown
  And I click on publish page button
  And I wait for 2 seconds
  And I click on go back to pages button
  And I wait for 2 seconds
  And I filter published pages
  And I sort by recently updated pages
  And I click on the first published page
  And I wait for 2 seconds
  And I click on page settings
  And I delete the page
  And I confirm the delete
  Then I see that the new page is not named as "Pagina para eliminar"

