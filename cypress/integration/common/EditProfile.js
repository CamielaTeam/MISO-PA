const selSaveButton = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selNameInput = "#user-name";

export function getSaveButton() {
  return cy.get(selSaveButton);
}

export function getProfileNameInput() {
  return cy.get(selNameInput);
}
