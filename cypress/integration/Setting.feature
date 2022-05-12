Feature: Settings features

  I want to modify the site

  @focus
  Scenario: Change facebook url
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand social accounts settings
    When I modify the facebook url with "https://www.facebook.com/groups/803519303725628"
    And I view the site
    Then I can access to "https://www.facebook.com/groups/803519303725628" facebook url

  @focus
  Scenario: Change twitter url
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand social accounts settings
    When I modify the twitter url with "https://twitter.com/bbcmundo"
    And I view the site
    Then I can access to "https://twitter.com/bbcmundo" twitter url


  @focus
  Scenario: Change the title and description of the site
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the settings page
    And I go to general settings page
    And I expand site title and description settings
    When I modify the site with title "Sitio editado" and description "Descripcion editada"
    And I view the site
    Then I see "Sitio editado" in the site title

  