Feature: Create draft post

@user1 @web
Scenario: Create a draft post successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "Mi nuevo post borrador" in the post title
  And I wait for 4 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Draft
  And I wait for 1 seconds
  Then I see that the first post in the list has title "Mi nuevo post borrador"

