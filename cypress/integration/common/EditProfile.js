const selSaveButton = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selNameInput = "#user-name";
const selUserSlug = "#user-slug";

export function getSaveButton() {
  return cy.get(selSaveButton);
}

export function getProfileNameInput() {
  return cy.get(selNameInput);
}

export function getUserSlug() {
  return cy.get(selUserSlug);
}
