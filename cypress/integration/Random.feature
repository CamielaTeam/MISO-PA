Feature: Forms with random runtime data

I want to validate user input on the forms

@focus
Scenario: Try to create a new member with empty data
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I click the "save_member" element
  Then I see "Please enter an email." on the screen

@focus
Scenario: Create a new member with valid data
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Login with correct data
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