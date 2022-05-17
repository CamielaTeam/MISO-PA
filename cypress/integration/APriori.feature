Feature: Forms with apriori data pool

I want to validate user input on the forms

@focus
Scenario: Create tag with empty title
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the tags page
  When I go to the new tag page


@focus
Scenario: Login with correct data pool
  Given I open Ghost admin page
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







