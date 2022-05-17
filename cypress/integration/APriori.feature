Feature: Forms with apriori data pool

  I want to validate user input on the forms

  @focus
  Scenario: Create tag with empty title
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I click save tag
    Then I see "You must specify a name for the tag." on the screen

  @focus
  Scenario: Create tag with whitespaces title
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "whitespaces" on the "tag_title" element
    And I click save tag
    Then I see "You must specify a name for the tag." on the screen

  @focus
  Scenario: Create tag with long title
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "more than 191 characters" on the "tag_title" element
    And I click save tag
    Then I see "Tag names cannot be longer than 191 characters." on the screen

  @focus
  Scenario: Create tag with title as numbers
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "numbers" on the "tag_title" element
    And I click save tag
    Then I see "Delete tag" on the screen

  @focus
  Scenario: Create tag with empty description
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "correct tag title" on the "tag_title" element
    And I click save tag
    Then I see "Delete tag" on the screen


  @focus
  Scenario: Create tag with a correct description
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "correct tag title" on the "tag_title" element
    And I put "correct tag description" on the "tag_description" element
    And I click save tag
    Then I see "Delete tag" on the screen


  @focus
  Scenario: Create tag with more than 500 characters in the description
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "more than 500 characters" on the "tag_description" element
    And I click save tag
    Then I see "Description cannot be longer than 500 characters." on the screen


  @focus
  Scenario: Create tag with an accent color with less than 5 characters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "one letter" on the "tag_accent" element
    And I click save tag
    Then I see "The colour should be in valid hex format" on the screen

  @focus
  Scenario: Create tag with invalid hex format letters
    Given I open Ghost admin page
    And I login into the admin page
    And I go to the tags page
    When I go to the new tag page
    And I put "invalid hex" on the "tag_accent" element
    And I click save tag
    Then I see "The colour should be in valid hex format" on the screen

  @focus
  Scenario: Login with correct data pool
    Given I open Ghost admin page
    When I login into the admin page
    And I put "a correct password" on the "login_password" element
    And I click the "login_button" element
    Then I see "There is no user with that email address." on the screen

  @focus
  Scenario: Login with incorrect email
    Given I open Ghost admin page
    When I put "an incorrect email" on the "login_email" element
    And I put "a correct password" on the "login_password" element
    And I click the "login_button" element
    Then I see "Please fill out the form to sign in." on the screen

  @focus
  Scenario: Login with empty email
    Given I open Ghost admin page
    When I put "an empty text" on the "login_email" element
    And I put "a correct password" on the "login_password" element
    And I click the "login_button" element
    Then I see "Please fill out the form to sign in." on the screen

  @focus
  Scenario: Login with empty password
    Given I open Ghost admin page
    When I put "a correct email" on the "login_email" element
    And I put "an empty text" on the "login_password" element
    And I click the "login_button" element
    Then I see "Please fill out the form to sign in." on the screen

  @focus
  Scenario: Login with space at the end of email
    Given I open Ghost admin page
    When I put "an email with whitespace at the end" on the "login_email" element
    And I put "a correct password" on the "login_password" element
    And I click the "login_button" element
    Then I see "There is no user with that email address." on the screen

  @focus
  Scenario: Login with short password
    Given I open Ghost admin page
    When I put "a correct email" on the "login_email" element
    And I put "a short password" on the "login_password" element
    And I click the "login_button" element
    Then I see "There is no user with that email address." on the screen

  @focus
  Scenario: Login with long password
    Given I open Ghost admin page
    When I put "a correct email" on the "login_email" element
    And I put "a long password" on the "login_password" element
    And I click the "login_button" element
    Then I see "There is no user with that email address." on the screen

  @focus
  Scenario: Login with numbers as email
    Given I open Ghost admin page
    When I put "numbers" on the "login_email" element
    And I put "a long password" on the "login_password" element
    And I click the "login_button" element
    Then I see "Please fill out the form to sign in." on the screen