Feature: Forms with apriori pseudorandom data pool

I want to validate user input on the forms

@focus
Scenario: Edit profile user email with a very long email address (controlled)
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option
  And I clear the field "profile_slug_input"
  And I clear the field "profile_email_input"
  And I put "a very long email address" on the "profile_email_input" element
  And I click the "save_profile" element
  Then I see "Email is too long" on the screen

@focus
Scenario: Edit profile user email with an empty email
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option
  And I clear the field "profile_slug_input"
  And I clear the field "profile_email_input"
  And I click the "save_profile" element
  Then I see "Please supply a valid email address" on the screen

@focus
Scenario: Edit profile user email with a very long string (uncontrolled)
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option
  And I clear the field "profile_slug_input"
  And I clear the field "profile_email_input"
  And I put "a very long any string" on the "profile_email_input" element
  And I click the "save_profile" element
  Then I see "Please supply a valid email address" on the screen

@focus
Scenario: Edit profile user email with a very long string (controlled)
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option
  And I clear the field "profile_slug_input"
  And I clear the field "profile_email_input"
  And I put "a very long string" on the "profile_email_input" element
  And I click the "save_profile" element
  Then I see "Please supply a valid email address" on the screen

@focus
Scenario: Edit profile user email with an incorrect email
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option
  And I clear the field "profile_slug_input"
  And I clear the field "profile_email_input"
  And I put "an incorrect email" on the "profile_email_input" element
  And I click the "save_profile" element
  Then I see "Please supply a valid email address" on the screen

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