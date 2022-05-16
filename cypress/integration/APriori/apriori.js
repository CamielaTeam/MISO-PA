import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import { dataDict } from "../common/DataPool";
import { elementDict } from "../common/ElementDictionary";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
});

When("I put {string} on the {string} element", (data, selector) => {
  if (dataDict[data]) {
    elementDict[selector]().type(dataDict[data]);
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
