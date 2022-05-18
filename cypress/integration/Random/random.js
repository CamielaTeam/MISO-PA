import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import { randDict } from "../common/DataPool";
import * as steps from "../common/PageObjectIndex";
import { elementDict } from "../common/ElementDictionary";

const { faker } = require("@faker-js/faker");

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
});

Given("I login into the admin page", () => {
  steps.setEmail(Cypress.env("admin_email"));
  steps.setPassword(Cypress.env("admin_password"));
  steps.clickLogin();
  cy.wait(2000);
});

Given("I go to the members page", () => {
  steps.clickMembers();
});

Given("I go to the new member page", () => {
  steps.clickNewMemberButton();
});

When("I put {string} on the {string} element", (data, selector) => {
  if (data === "a very short string") {
    elementDict[selector]().type(faker.datatype.string(1), { force: true });
  } else if (data === "a long string") {
    elementDict[selector]().type(faker.datatype.string(100), { force: true });
  } else if (data === "a very long string") {
    elementDict[selector]().type(faker.internet.password(500), { force: true });
  } else if (data === "a very long any string") {
    elementDict[selector]().type(faker.datatype.string(500), { force: true });
  } else if (data === "an edge long string on member note") {
    elementDict[selector]().type(faker.internet.password(501), { force: true });
  } else if (data === "an edge long string on member name") {
    elementDict[selector]().type(faker.internet.password(192), { force: true });
  } else if (data === "an edge equal string on member name") {
    elementDict[selector]().type(faker.internet.password(191), { force: true });
  } else if (data === "a name starting with blankspace") {
    elementDict[selector]().type(
      faker.internet.password(null, null, null, "  "),
      { force: true }
    );
  } else if (data === "a very long email") {
    elementDict[selector]().type(
      faker.internet.password(100) + "@example.com",
      { force: true }
    );
  } else if (randDict[data]) {
    elementDict[selector]().type(randDict[data](), { force: true });
  } else {
    elementDict[selector]().type(data, { force: true });
  }
});

When("I click the {string} element", (selector) => {
  elementDict[selector]().click();
});

When("I click on the search button", () => {
  steps.clickSearchButton();
});

When("I click on the edit profile option", () => {
  steps.clickProfileEdit();
});

When("I clear the field {string}", (selector) => {
  elementDict[selector]().clear();
});

Then("I see {string} on the screen", (text) => {
  expect(cy.contains(text)).to.exist;
});

Then("I don't see {string} on the screen", (text) => {
  expect(cy.contains(text)).to.not.exist;
});

When("I go to the tags page", () => {
  steps.clickTags();
  cy.wait(2000);
});

Given("I go to the new tag page", () => {
  steps.clickNewTag();
  cy.wait(2000);
});
