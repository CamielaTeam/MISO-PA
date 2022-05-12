Feature: Tags features

  I want to create/edit/delete/asign a tag succesfully

  @focus @clear
  Scenario: Create a tag successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    And I go to the new tag page
    When I create a new tag with name "Nuevo tag" and description "Descripción de mi tag"
    And I go to the tags page
    Then I see that there is a tag with name "Nuevo tag"

  @focus
  Scenario: Edit a tag successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    And I go to the new tag page
    And I create a new tag with name "Nuevo tag" and description "Descripción de mi tag"
    And I go to the tags page
    When I click the last tag in the list
    And I clear the tag name
    And I clear the tag description
    And I edit the tag with name "Tag editado" and description "Descripcion editada"
    And I go to the tags page
    Then I see that there is a tag with name "Tag editado"

  @focus 
  Scenario: Delete a tag successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    And I go to the new tag page
    And I create a new tag with name "Tag para eliminar" and description "Descripción de mi tag"
    And I go to the tags page
    And I click the last tag in the list
    When I delete the tag
    And I go to the tags page
    Then I see that there is no tag with the name "Tag para eliminar" in the tag list

  @focus 
  Scenario: Asign a tag to a post
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    And I go to the new tag page
    And I create a new tag with name "Tag para asignar" and description "Descripción de mi tag"
    And I go to the posts page
    And I go to the new post page
    And I create a new post with title "Mi nuevo post"
    And I publish the new post
    And I return to the posts list
    And I click in the first post in the list
    And I open the post settings
    When I asign the tag "Tag para asignar" to the post
    And I update the new post
    And I return to the posts list
    And I filter posts by status Published
    Then I see that the first post in the list has tag "Tag para asignar"