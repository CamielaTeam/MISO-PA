Feature: Edit a page

@user1 @web
Scenario: Edit a page title and see the changes
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I write "Nueva pagina para editar" in the page title
  And I click on publish page dropdown
  And I wait for 2 seconds
  And I click on publish page button
  And I wait for 2 seconds
  And I click on go back to pages button
  And I wait for 2 seconds
  And I filter published pages
  And I click on the first published page
  And I wait for 2 seconds
  And I write "Titulo modificado" in the page title
  And I click on update page dropdown
  And I click on publish page button
  And I wait for 2 seconds
  And I click on go back to pages button
  And I wait for 2 seconds
  And I filter published pages
  And I sort by recently updated pages
  Then I see that the new page is named as "Titulo modificado"

