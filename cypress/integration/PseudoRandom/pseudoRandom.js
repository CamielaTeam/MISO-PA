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
    elementDict[selector]().type(pseudoRandDict[data]);
  } else {
    elementDict[selector]().type(data);
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

Given("I go to the new tag page", () => {
  steps.clickNewTag();
  cy.wait(2000);
});
