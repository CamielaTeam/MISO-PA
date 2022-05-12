Feature: Edit post

@user1 @web
Scenario: Edit a post successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  When I click on the new post button
  And I wait for 2 seconds
  And I write "Post nuevo" in the post title
  And I publish the new post
  And I wait for 2 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Published
  And I wait for 2 seconds
  And I click in the first post in the list
  When I edit "Post editado" in the post title
  And I publish the edited post
  And I wait for 2 seconds
  And I return to the posts list
  And I wait for 2 seconds
  And I filter posts by status Published
  And I wait for 2 seconds
  Then I see that the first post in the list has title "Post editado"

