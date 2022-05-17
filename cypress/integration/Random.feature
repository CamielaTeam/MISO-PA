Feature: Forms with random runtime data

I want to validate user input on the forms

@focus
Scenario: Login with correct data pool
  Given I open Ghost admin page
  When I put "a correct email" on the "login_email" element
  And I put "a correct password" on the "login_password" element
  And I click the "login_button" element
  Then I see "There is no user with that email address." on the screen

@focus
Scenario: Login with incorrect email field
  Given I open Ghost admin page
  When I put "an incorrect email" on the "login_email" element
  And I put "a correct password" on the "login_password" element
  And I click the "login_button" element
  Then I see "Please fill out the form to sign in." on the screen