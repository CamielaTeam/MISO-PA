Feature: Delete published post

@user1 @web
Scenario: Delete a published post successfully
  Given I navigate to page "http://localhost:2369/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "Mi nuevo post para eliminar" in the post title in new version
  And I publish the new post in new version
  And I wait for 2 seconds
  And I return to the posts list in new version
  And I wait for 2 seconds
  And I filter posts by status Published
  And I wait for 1 seconds
  And I click in the first post in the list
  And I wait for 2 seconds
  And I open the post settings
  And I delete the post
  And I wait for 2 seconds
  And I filter posts by status Published
  And I wait for 2 seconds
  Then I see that there is no post with the title "Mi nuevo post para eliminar" in the post list