Feature: Create page and see it live

@user1 @web
Scenario: Create a page successfully and see it live
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the page button
  And I wait for 2 seconds
  And I click on new page
  And I write "Nueva pagina" in the page title
  And I click on publish page dropdown
  And I click on publish page button
  And I wait for 2 seconds
  Then I see the page

