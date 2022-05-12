Feature: Asign tag

@user1 @web
Scenario: Asign a tag successfully
  Given I navigate to page "http://localhost:2368/ghost/"
  And I enter email "<ADMIN_EMAIL>"
  And I enter password "<ADMIN_PASSWORD>"
  And I click on the login button
  And I wait for 2 seconds
  And I click on tags option
  And I wait for 2 seconds
  And I click on the new tags button
  And I write "Tag para asignar" in the tag name
  And I write "Descripción de tag" in the tag description
  And I save the new tag
  And I click on posts option
  And I wait for 1 seconds
  And I click on the new post button
  And I wait for 2 seconds
  And I write "Mi nuevo post" in the post title
  And I open the post settings
  When I asign the tag "Tag para asignar" to the post
  And I wait for 1 seconds
  And I publish the new post
  And I wait for 2 seconds
  And I return to the posts list
  And I filter posts by status Published
  And I wait for 2 seconds
  Then I see that there is a post in the list with name "Tag para asignar"
