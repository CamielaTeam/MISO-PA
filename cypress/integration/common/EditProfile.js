const selSaveButton = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selNameInput = "#user-name";
const selUserSlug = "#user-slug";
const selEmailInput = "#user-email";
const selUserLocation = "#user-location";
const selUserWebsiteInput = "#user-website";

export function getUserWebsiteInput() {
  return cy.get(selUserWebsiteInput);
}

export function getUserLocationInput() {
  return cy.get(selUserLocation);
}

export function getSaveButton() {
  return cy.get(selSaveButton);
}

export function getProfileNameInput() {
  return cy.get(selNameInput);
}

export function getUserSlug() {
  return cy.get(selUserSlug);
}

export function getUserEmailInput() {
  return cy.get(selEmailInput);
}
