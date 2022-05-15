Feature: Delete a scheduled post

@user1 @web
Scenario: Delete a published post successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I save a screenshot with scenario "DeleteScheduledPost" and step "open-admin"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I save a screenshot with scenario "DeleteScheduledPost" and step "before-login"
  And I click on the login button
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "after-login"
  When I click on the new post button
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "creating-post"
  And I write "Mi nuevo post programado para eliminar" in the post title
  And I save a screenshot with scenario "DeleteScheduledPost" and step "editing-post"
  And I schedule the new post
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "scheduling-post"
  And I return to the posts list
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "listing-posts"
  And I filter posts by status Scheduled
  And I wait for 1 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "filtering-posts"
  And I click in the first post in the list
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "open-editing-post"
  And I open the post settings
  And I save a screenshot with scenario "DeleteScheduledPost" and step "open-post-settings"
  And I delete the post
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "after-delete-post"
  And I filter posts by status Scheduled
  And I wait for 2 seconds
  And I save a screenshot with scenario "DeleteScheduledPost" and step "re-filtering-posts"
  Then I see that there is no post with the title "Mi nuevo post programado para eliminar" in the post list
  And I save a screenshot with scenario "DeleteScheduledPost" and step "checking-posts"