Feature: Create post

@user1 @web
Scenario: Create a post successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I save a screenshot with scenario "CreatePost" and step "open-admin"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I save a screenshot with scenario "CreatePost" and step "before-login"
  And I click on the login button
  And I wait for 2 seconds
  And I save a screenshot with scenario "CreatePost" and step "after-login"
  When I click on the new post button
  And I wait for 2 seconds
  And I save a screenshot with scenario "CreatePost" and step "creating-post"
  And I write "Mi nuevo post" in the post title
  And I save a screenshot with scenario "CreatePost" and step "editing-post"
  And I publish the new post
  And I wait for 2 seconds
  And I save a screenshot with scenario "CreatePost" and step "publishing-post"
  And I return to the posts list
  And I wait for 2 seconds
  And I save a screenshot with scenario "CreatePost" and step "listing-posts"
  And I filter posts by status Published
  And I wait for 1 seconds
  And I save a screenshot with scenario "CreatePost" and step "filtering-posts"
  Then I see that the first post in the list has title "Mi nuevo post"
  And I save a screenshot with scenario "CreatePost" and step "checking-posts"

