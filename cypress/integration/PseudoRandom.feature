Feature: Forms with apriori data pool

I want to validate user input on the forms

@focus
Scenario: Login with correct data pool
  Given I open Ghost admin page
  When I put "a correct email" on the "login_email" element
  And I put "a correct password" on the "login_password" element
  And I click the "login_button" element
  Then I see "There is no user with that email address." on the screen

@focus
Scenario: Login with a very long password
  Given I open Ghost admin page
  When I put "a correct email" on the "login_email" element
  And I put "a very long password" on the "login_password" element
  And I click the "login_button" element
  Then I see "There is no user with that email address." on the screen

@focus
Scenario: Login with password that contains whitespaces
  Given I open Ghost admin page
  When I put "a correct email" on the "login_email" element
  And I put "a password with whitespace" on the "login_password" element
  And I click the "login_button" element
  Then I see "There is no user with that email address." on the screen