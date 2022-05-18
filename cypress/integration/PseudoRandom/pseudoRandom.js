import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import { pseudoRandDict } from "../common/DataPool";
import { elementDict } from "../common/ElementDictionary";
import * as steps from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
});

Given("I login into the admin page", () => {
  steps.setEmail(Cypress.env("admin_email"));
  steps.setPassword(Cypress.env("admin_password"));
  steps.clickLogin();
  cy.wait(2000);
});

When("I put {string} on the {string} element", (data, selector) => {
  if (pseudoRandDict[data]) {
    elementDict[selector]().type(pseudoRandDict[data], { force: true });
  } else {
    elementDict[selector]().type(data, { force: true });
  }
});

When("I click the {string} element", (selector) => {
  elementDict[selector]().click();
});

Then("I see {string} on the screen", (text) => {
  expect(cy.contains(text)).to.exist;
});

When("I go to the tags page", () => {
  steps.clickTags();
  cy.wait(2000);
});

When("I click on the edit profile option", () => {
  steps.clickProfileEdit();
});

When("I clear the field {string}", (selector) => {
  elementDict[selector]().clear();
});

Given("I go to the new tag page", () => {
  steps.clickNewTag();
  cy.wait(2000);
});

Then("I don't see {string} on the screen", (text) => {
  expect(cy.contains(text)).to.not.exist;
});

// Members

Given("I go to the members page", () => {
  steps.clickMembers();
});

Given("I go to the new member page", () => {
  steps.clickNewMemberButton();
});
