Feature: Post features

  I want to create/delete/update a post succesfully

  @focus @clear
  Scenario: Create a post successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi nuevo post"
    And I publish the new post
    And I return to the posts list
    And I filter posts by status Published
    Then I see that the first post in the list has title "Mi nuevo post" and status "Published"

  @focus @clear
  Scenario: Create a draft post successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi nuevo post borrador"
    And I return to the posts list
    And I filter posts by status Draft
    Then I see that the first post in the list has title "Mi nuevo post borrador" and status "Draft"

  @focus @clear
  Scenario: Create a scheduled post successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi nuevo post programado"
    And I schedule the new post
    And I return to the posts list
    And I filter posts by status Scheduled
    Then I see that the first post in the list has title "Mi nuevo post programado" and status "Scheduled"
  
  @focus
  Scenario: Delete a scheduled post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi post programado para eliminar"
    And I schedule the new post
    And I return to the posts list
    And I filter posts by status Scheduled
    And I click in the first post in the list
    And I open the post settings
    And I delete the post
    And I filter posts by status Scheduled
    Then I see that there is no post with the title "Mi post programado para eliminar" in the post list

  @focus
  Scenario: Delete a published post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi post publicado para eliminar"
    And I publish the new post
    And I return to the posts list
    And I filter posts by status Published
    And I click in the first post in the list
    And I open the post settings
    And I delete the post
    And I filter posts by status Published
    Then I see that there is no post with the title "Mi post publicado para eliminar" in the post list

  @focus
  Scenario: Delete a draft post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi post borrador para eliminar"
    And I return to the posts list
    And I filter posts by status Draft
    And I click in the first post in the list
    And I open the post settings
    And I delete the post
    And I filter posts by status Draft
    Then I see that there is no post with the title "Mi post borrador para eliminar" in the post list

  @focus @clear
  Scenario: Edit a published post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Post nuevo"
    And I publish the new post
    And I return to the posts list
    And I click in the first post in the list
    And I clear the post title
    When I edit the post with title "Post editado"
    And I update the new post
    And I return to the posts list
    Then I see that the first post in the list has title "Post editado" and status "Published"

  @focus
  Scenario: Delete a draft post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new post page
    When I create a new post with title "Mi post borrador para eliminar"
    And I return to the posts list
    And I filter posts by status Draft
    And I click in the first post in the list
    And I open the post settings
    And I delete the post
    And I filter posts by status Draft
    Then I see that there is no post with the title "Mi post borrador para eliminar" in the post list