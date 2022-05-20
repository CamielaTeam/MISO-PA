import { Given } from "cypress-cucumber-preprocessor/steps";

import {
  setSiteTitle,
  clickSettings,
  setEmail,
  setPassword,
  clickGeneralSettings,
  clearTitle,
  clearDescription,
  setSiteDescription,
  saveSettings,
  clickViewSite,
  clickExpandSocialButton,
  clickLogin,
  clickExpandButton,
  getNavSiteTitle,
  setFacebookUrl,
  setTwitterUrl,
  clearFacebookUrl,
  clearTwitterUrl,
  getFacebookLink,
  getTwitterLink,
} from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
});

Given("I go to the settings page", () => {
  clickSettings();
  cy.wait(2000);
});

Given("I go to general settings page", () => {
  clickGeneralSettings();
  cy.wait(2000);
});

Given("I expand site title and description settings", () => {
  clickExpandButton();
  cy.wait(2000);
});

Given("I expand social accounts settings", () => {
  clickExpandSocialButton();
  cy.wait(2000);
});

When(
  "I modify the site with title {string} and description {string}",
  (title, description) => {
    clearTitle();
    setSiteTitle(title);
    cy.wait(1000);
    clearDescription();
    setSiteDescription(description);
    saveSettings();
    cy.wait(2000);
  }
);

When("I view the site", () => {
  clickViewSite();
  cy.wait(3000);
});

Then(`I see {string} in the site title`, (title) => {
  const siteTitle = getNavSiteTitle();
  siteTitle.should("contain.text", title);
});

When("I modify the facebook url with {string}", (facebookUrl) => {
  clearFacebookUrl();
  setFacebookUrl(facebookUrl);
  saveSettings();
  cy.wait(2000);
});

When("I modify the twitter url with {string}", (twitterUrl) => {
  clearTwitterUrl();
  setTwitterUrl(twitterUrl);
  saveSettings();
  cy.wait(2000);
});

Then(`I can access to {string} facebook url`, (facebookUrl) => {
  cy.visit(Cypress.env("ghost_url"));
  const siteTitle = getFacebookLink();
  siteTitle.invoke("attr", "href").should("eq", facebookUrl);
});

Then(`I can access to {string} twitter url`, (twitterUrl) => {
  cy.visit(Cypress.env("ghost_url"));
  const siteTitle = getTwitterLink();
  siteTitle.invoke("attr", "href").should("eq", twitterUrl);
});
