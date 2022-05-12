Feature: Page features

  I want to create/delete a page succesfully

  @focus @clear
  Scenario: Create a page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi nueva page"
    And I publish the new page
    And I return to the pages list
    And I filter pages by status Published
    Then I see that the first page in the list has title "Mi nueva page" and status "Published"

  @focus
  Scenario: Delete a page
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi page programado para eliminar"
    And I publish the new page
    And I return to the pages list
    And I filter pages by status Published
    And I click in the first page in the list
    And I open the page settings
    And I delete the page
    And I filter pages by status Published
    Then I see that there is no page with the title "Mi page programado para eliminar" in the page list
