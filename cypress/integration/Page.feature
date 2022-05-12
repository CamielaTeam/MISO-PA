Feature: Page features

  I want to create/delete/update a page succesfully

  @focus
  Scenario: Delete a scheduled page
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi page programado para eliminar"
    And I schedule the new page
    And I return to the pages list
    And I filter pages by status Scheduled
    And I click in the first page in the list
    And I open the page settings
    And I delete the page
    And I filter pages by status Scheduled
    Then I see that there is no page with the title "Mi page programado para eliminar" in the page list

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

  @focus @clear
  Scenario: Create a scheduled page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi nueva page programado"
    And I schedule the new page
    And I return to the pages list
    And I filter pages by status Scheduled
    Then I see that the first page in the list has title "Mi nueva page programado" and status "Scheduled"

  @focus @clear
  Scenario: Create a draft page successfully
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the new page page
    When I create a new page with title "Mi nueva page borrador"
    And I return to the pages list
    And I filter pages by status Draft
    Then I see that the first page in the list has title "Mi nueva page borrador" and status "Draft"

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
  
  
