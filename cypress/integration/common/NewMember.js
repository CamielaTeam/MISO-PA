const name = "#member-name";
const email = "#member-email";
const saveMemberButton = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";

export function getMemberNameInput() {
  return cy.get(name);
}

export function getMemberEmailInput() {
  return cy.get(email);
}

export function getSaveMemberButton() {
  return cy.get(saveMemberButton);
}
