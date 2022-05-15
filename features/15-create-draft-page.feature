Feature: Create draft page

@user1 @web
Scenario: Create a draft page successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I write "Nueva pagina como borrador" in the page title
  And I click on go back to pages button
  And I wait for 2 seconds
  And I filter draft pages
  And I sort by newest pages
  Then I see that the new page is named as "Nueva pagina como borrador"
