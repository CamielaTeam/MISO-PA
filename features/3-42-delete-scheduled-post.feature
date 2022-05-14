Feature: Delete a scheduled post

@user1 @web
Scenario: Delete a published post successfully
  Given I navigate to page "http://localhost:2369/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "Mi nuevo post programado para eliminar" in the post title in new version
  And I schedule the new post in v3.42
  And I wait for 2 seconds
  And I return to the posts list in new version
  And I wait for 2 seconds
  And I filter posts by status Scheduled
  And I wait for 1 seconds
  And I click in the first post in the list
  And I wait for 2 seconds
  And I open the post settings in v3.42
  And I click delete post in v3.42
  And I wait for 2 seconds
  And I confirm delete in v3.42
  And I wait for 2 seconds
  And I filter posts by status Scheduled
  And I wait for 2 seconds
  Then I see that there is no post with the title "Mi nuevo post programado para eliminar" in the post list