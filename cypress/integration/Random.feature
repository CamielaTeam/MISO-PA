Feature: Forms with random runtime data

I want to validate user input on the forms

@focus
Scenario: Testing
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the edit profile option

@focus
Scenario: Search a numeric string in general view
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the search button
  When I put "a number" on the "search_input" element
  And I click the "search_input" element

@focus
Scenario: Search a normal string in general view
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the search button
  When I put "a name" on the "search_input" element
  And I click the "search_input" element

@focus
Scenario: Search a very long string in general view (uncontrolled)
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the search button
  When I put "a very long any string" on the "search_input" element
  And I click the "search_input" element

@focus
Scenario: Search a very long string in general view (controlled)
  Given I open Ghost admin page
  And I login into the admin page
  And I click on the search button
  When I put "a very long string" on the "search_input" element
  And I click the "search_input" element

@focus
Scenario: Create a new member with valid data and an email string in note field
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a correct email" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and a numeric note
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a number" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with an email string in labels field
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a correct email" on the "member_labels" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with a very long string in labels field (uncontrolled string)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very long any string" on the "member_labels" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with numeric only string in labels field
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a number" on the "member_labels" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with a verly long string in labels field
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very long string" on the "member_labels" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with numeric only string in email field
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a number" on the "member_email" element
  And I click the "save_member" element
  Then I see "Invalid Email" on the screen

@focus
Scenario: Create a new member with valid data and a very long email
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a very long email" on the "member_email" element
  And I click the "save_member" element
  Then I see "Invalid Email" on the screen

@focus
Scenario: Create a new member with numeric name
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a number" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I don't see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and very short name
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a very short string" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and a long name (192 controlled characters)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "an edge long string on member name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Name cannot be longer than 191 characters." on the screen

@focus
Scenario: Create a new member with valid data and long name (191 controlled characters)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "an edge equal string on member name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and long name
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a long string" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and a name starting with blankspace
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name starting with blankspace" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and a very long name
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a very long string" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Name cannot be longer than 191 characters." on the screen

@focus
Scenario: Create a new member with empty data
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
Scenario: Create a new member with valid data and short note
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very short string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and long note (500 controlled characters)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very long string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and long note (500 uncontrolled characters)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "a very long any string" on the "member_note" element
  And I click the "save_member" element
  Then I see "Saved" on the screen

@focus
Scenario: Create a new member with valid data and long note (501 uncontrolled characters)
  Given I open Ghost admin page
  And I login into the admin page
  And I go to the members page
  And I go to the new member page
  When I put "a name" on the "member_name" element
  And I put "a correct email" on the "member_email" element
  And I put "an edge long string on member note" on the "member_note" element
  And I click the "save_member" element
  Then I see "Maximum: 500 characters. You’ve used 501" on the screen

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